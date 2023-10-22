import MyNavbar from "../component/Navbar";
import MyFooter from "../component/MyFooter";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const NewEmp = () => {
  const [uid, setUid] = useState('');
  const [img, setImg] = useState(null);

  const fetchUID = async () => {
    while (true) {
      const response = await fetch('http://140.113.122.120:3002/uid');
      if (response.status !== 400) {
        const data = await response.json();
        setUid(data.uid);
        break;
      }
    }
  }

  useEffect(() => {
    fetchUID();
  }, [])

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  function formatDateToCustomString(date) {
    const options = {
      year: 'numeric',
      month: '2-digit', // '2-digit' ensures two-digit month (e.g., 01, 02, ..., 12)
      day: '2-digit',   // '2-digit' ensures two-digit day (e.g., 01, 02, ..., 31)
      hour: '2-digit',  // '2-digit' ensures two-digit hour (00 - 23)
      minute: '2-digit', // '2-digit' ensures two-digit minute (00 - 59)
    };

    return date.toLocaleString('zh-TW', options).replace(/,/g, '');
  }

  const handleUploadImage = (e) => {
    const files = e.target.files;
    setImg(files[0]);
  }

  const handleUpload = async () => {
    const backendServiceUrl = 'http://192.168.50.110:5000';
    let formData = new FormData();
    const myDate = new Date();
    const formattedDate = formatDateToCustomString(myDate);
    formData.append('image', img.originFileObj);
    formData.append('EmpId', uid);
    formData.append('DateTime', formattedDate);
    formData.append('ToolScanTime', Math.random() * 0.5);

    console.log(formData);

    await fetch(`${backendServiceUrl}/upload`, {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <>
      <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content', minHeight: '90vh' }}>
        <MyNavbar />
        <div style={{ width: '70%', marginLeft: '15%', marginTop: '50px' }}>
          {uid.length === 0 ? <h3 className="mt-5">
            請將卡片靠近感應器...
          </h3> : <h3 className="mt-5">
            UID: {uid}
          </h3>}
          <h3 className="mt-5">安檢照片</h3>
          <Form.Control className="mt-3" type='file' onChange={handleUploadImage} />
          <Button className="mt-5" onClick={handleUpload}>送出</Button>
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default NewEmp;