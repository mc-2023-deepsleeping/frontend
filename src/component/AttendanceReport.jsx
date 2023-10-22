import { Form, Table, Row, Col, Button } from "react-bootstrap";
import AttendanceChart, { AttendancePieChart } from "./AttendanceChart";
import './style.css'
import HQAttendanceChart, { HQAttendancePieChart } from "./HQAttendanceChart";
import AZAttendanceChart, { AZAttendancePieChart } from "./AZAttendanceChart";
import { useEffect, useState } from "react";
import { AZAttendanceLineChart, AttendanceLineChart, HQAttendanceLineChart } from "./AttendanceLineChart";
import punchCardData from "../testdata/punchCard";
import securityCheck from "../testdata/securityCheck";
import SecurityChart from "./SecurityChart";
import HQSecurityChart from "./HQSecurityChart";
import AzSecurityChart from "./AZSecurityChart";

const AttendanceReport = () => {
  const [selectAll, setSelectAll] = useState(false);

  const [allAttendanceBarDescription, setAllAttendanceBarDescription] = useState('');
  const [allAttendanceBarSelected, setAllAttendanceBarSelected] = useState(false);
  const [allAttendanceBarImage, setAllAttendanceBarImage] = useState('');
  const [AZAttendanceBarImage, setAZAttendanceBarImage] = useState('');
  const [AZAttendanceBarDescription, setAZAttendanceBarDescription] = useState('');
  const [AZAttendanceBarSelected, setAZAttendanceBarSelected] = useState(false);
  const [HQAttendanceBarImage, setHQAttendanceBarImage] = useState('');
  const [HQAttendanceBarDescription, setHQAttendanceBarDescription] = useState('');
  const [HQAttendanceBarSelected, setHQAttendanceBarSelected] = useState(false)

  const [allSecurityBarDescription, setAllSecurityBarDescription] = useState('');
  const [allSecurityBarSelected, setAllSecurityBarSelected] = useState(false);
  const [allSecurityBarImage, setAllSecurityBarImage] = useState('');
  const [AZSecurityBarImage, setAZSecurityBarImage] = useState('');
  const [AZSecurityBarDescription, setAZSecurityBarDescription] = useState('');
  const [AZSecurityBarSelected, setAZSecurityBarSelected] = useState(false);
  const [HQSecurityBarImage, setHQSecurityBarImage] = useState('');
  const [HQSecurityBarDescription, setHQSecurityBarDescription] = useState('');
  const [HQSecurityBarSelected, setHQSecurityBarSelected] = useState(false)

  const [allAttendancePieDescription, setAllAttendancePieDescription] = useState('');
  const [allAttendancePieImage, setAllAttendancePieImage] = useState('');
  const [allAttendancePieSelected, setAllAttendancePieSelected] = useState(false);
  const [AZAttendancePieDescription, setAZAttendancePieDescription] = useState('');
  const [AZAttendancePieSelected, setAZAttendancePieSelected] = useState(false);
  const [AZAttendancePieImage, setAZAttendancePieImage] = useState('');
  const [HQAttendancePieDescription, setHQAttendancePieDescription] = useState('');
  const [HQAttendancePieSelected, setHQAttendancePieSelected] = useState(false);
  const [HQAttendancePieImage, setHQAttendancePieImage] = useState('');

  const [allAttendanceLineDescription, setAllAttendanceLineDescription] = useState('');
  const [allAttendanceLineSelected, setAllAttendanceLineSelected] = useState(false);
  const [allAttendanceLineImage, setAllAttendanceLineImage] = useState('');
  const [AZAttendanceLineDescription, setAZAttendanceLineDescription] = useState('');
  const [AZAttendanceLineSelected, setAZAttendanceLineSelected] = useState(false);
  const [AZAttendanceLineImage, setAZAttendanceLineImage] = useState('');
  const [HQAttendanceLineDescription, setHQAttendanceLineDescription] = useState('');
  const [HQAttendanceLineSelected, setHQAttendanceLineSelected] = useState(false);
  const [HQAttendanceLineImage, setHQAttendanceLineImage] = useState('');

  useEffect(() => {
    if (selectAll) {
      setAllAttendanceBarSelected(true);
      setAZAttendanceBarSelected(true);
      setHQAttendanceBarSelected(true);
      setAllAttendancePieSelected(true);
      setAZAttendancePieSelected(true);
      setHQAttendancePieSelected(true);
      setAllAttendanceLineSelected(true);
      setAZAttendanceLineSelected(true);
      setHQAttendanceLineSelected(true);
      setAllSecurityBarSelected(true);
      setAZSecurityBarSelected(true);
      setHQSecurityBarSelected(true);
    } else {
      setAllAttendanceBarSelected(false);
      setAZAttendanceBarSelected(false);
      setHQAttendanceBarSelected(false);
      setAllAttendancePieSelected(false);
      setAZAttendancePieSelected(false);
      setHQAttendancePieSelected(false);
      setAllAttendanceLineSelected(false);
      setAZAttendanceLineSelected(false);
      setHQAttendanceLineSelected(false);
      setAllSecurityBarSelected(false);
      setAZSecurityBarSelected(false);
      setHQSecurityBarSelected(false);
    }
  }, [selectAll])

  const handleCreateReport = async () => {
    // Compress the image data
    const strings = {
      allAttendanceBarDescription,
      allAttendanceBarSelected,
      AZAttendanceBarDescription,
      AZAttendanceBarSelected,
      HQAttendanceBarDescription,
      HQAttendanceBarSelected,
      allAttendancePieDescription,
      allAttendancePieSelected,
      AZAttendancePieDescription,
      AZAttendancePieSelected,
      HQAttendancePieDescription,
      HQAttendancePieSelected,
      allAttendanceLineDescription,
      allAttendanceLineSelected,
      AZAttendanceLineDescription,
      AZAttendanceLineSelected,
      HQAttendanceLineDescription,
      HQAttendanceLineSelected,
      allSecurityBarDescription,
      HQSecurityBarSelected,
      AZSecurityBarDescription,
      AZSecurityBarSelected,
      HQSecurityBarDescription,
      allSecurityBarSelected,
    };
    const images = [
      allAttendanceBarImage,
      AZAttendanceBarImage,
      HQAttendanceBarImage,
      allAttendancePieImage,
      AZAttendancePieImage,
      HQAttendancePieImage,
      allAttendanceLineImage,
      AZAttendanceLineImage,
      HQAttendanceLineImage,
      allSecurityBarImage,
      AZSecurityBarImage,
      HQSecurityBarImage,
    ];

    // const doc = new jsPDF();
    // doc.addFileToVFS('NotoSansTC-Regular.ttf', 'NotoSansTC-Regular');
    // doc.addFont('./NotoSansTC-Regular.ttf', 'NotoSansTC-Regular', 'normal');
    // doc.setFont('NotoSansTC-Regular');

    // console.log(doc.getFontList());

    // // Define the base64 image string
    // const base64Image = images[0]; // Replace with your image data

    // // Add the image to the PDF
    // doc.addImage(base64Image, 'PNG', 10, 10, 90, 0); // Adjust the coordinates and size as needed

    // // Add text or other content
    // doc.text('Hello, 台灣 this is a PDF with an image!', 10, 110);

    // // Save or display the PDF
    // doc.save('my-pdf.pdf');
    await fetch('http://140.113.122.120:3002/api/upload-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images, strings
      })
    }).then(response => response.blob())
      .then(blob => {
        // Create a URL for the PDF blob
        const url = window.URL.createObjectURL(blob);

        // Create an <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'weekly-report.pdf'; // Set the desired file name
        a.style.display = 'none';

        // Add the <a> element to the DOM and trigger the download
        document.body.appendChild(a);
        a.click();

        // Clean up: remove the <a> element and revoke the URL
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
  }

  return (
    <div style={{ width: '80%', marginLeft: '10%' }}>
      <h2 style={{ marginTop: '50px' }}>週報</h2>
      <p>手指輕點，輕鬆完成一週報表。請選取要使用的圖表，根據需求改名，再按下方按鈕製作週報。</p>
      <Button onClick={handleCreateReport}>製作並下載週報</Button>
      <Table striped bordered style={{ marginTop: '30px' }}>
        <thead>
          <tr>
            <th className="text-center">
              <Form.Check type='checkbox' checked={selectAll} onChange={() => setSelectAll(prev => !prev)} />
            </th>
            <th className="text-center" style={{ width: '120px' }}>名稱</th>
            <th className="text-center" style={{ width: '200px' }}>描述</th>
            <th className="text-center">預覽圖</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={allAttendanceBarSelected}
                onChange={() => setAllAttendanceBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">總出勤長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={allAttendanceBarDescription}
                onChange={(e) => setAllAttendanceBarDescription(e.target.value)}
              />
            </td>
            <td><AttendanceChart setImage={setAllAttendanceBarImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={HQAttendanceBarSelected}
                onChange={() => setHQAttendanceBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">HQ 出勤長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={HQAttendanceBarDescription}
                onChange={(e) => setHQAttendanceBarDescription(e.target.value)}
              />
            </td>
            <td><HQAttendanceChart setImage={setHQAttendanceBarImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={AZAttendanceBarSelected}
                onChange={() => setAZAttendanceBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">AZ 出勤長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={AZAttendanceBarDescription}
                onChange={(e) => setAZAttendanceBarDescription(e.target.value)}
              />
            </td>
            <td><AZAttendanceChart setImage={setAZAttendanceBarImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={allAttendancePieSelected}
                onChange={() => setAllAttendancePieSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">總安檢圓餅圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={allAttendancePieDescription}
                onChange={(e) => setAllAttendancePieDescription(e.target.value)}
              />
            </td>
            <td><AttendancePieChart setImage={setAllAttendancePieImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={HQAttendancePieSelected}
                onChange={() => setHQAttendancePieSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">HQ 安檢圓餅圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={HQAttendancePieDescription}
                onChange={(e) => setHQAttendancePieDescription(e.target.value)}
              />
            </td>
            <td><HQAttendancePieChart setImage={setHQAttendancePieImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={AZAttendancePieSelected}
                onChange={() => setAZAttendancePieSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">AZ 安檢圓餅圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={AZAttendancePieDescription}
                onChange={(e) => setAZAttendancePieDescription(e.target.value)}
              />
            </td>
            <td><AZAttendancePieChart setImage={setAZAttendancePieImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={allAttendanceLineSelected}
                onChange={() => setAllAttendanceLineSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">總出勤折線圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={allAttendanceLineDescription}
                onChange={(e) => setAllAttendanceLineDescription(e.target.value)}
              />
            </td>
            <td><AttendanceLineChart setImage={setAllAttendanceLineImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={HQAttendanceLineSelected}
                onChange={() => setHQAttendanceLineSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">HQ 出勤折線圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={HQAttendanceLineDescription}
                onChange={(e) => setHQAttendanceLineDescription(e.target.value)}
              />
            </td>
            <td><HQAttendanceLineChart setImage={setHQAttendanceLineImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={AZAttendanceLineSelected}
                onChange={() => setAZAttendanceLineSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">AZ 出勤折線圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={AZAttendanceLineDescription}
                onChange={(e) => setAZAttendanceLineDescription(e.target.value)}
              />
            </td>
            <td><AZAttendanceLineChart setImage={setAZAttendanceLineImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={allSecurityBarSelected}
                onChange={() => setAllSecurityBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">總安檢長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={allSecurityBarDescription}
                onChange={(e) => setAllSecurityBarDescription(e.target.value)}
              />
            </td>
            <td><SecurityChart setImage={setAllSecurityBarImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={HQSecurityBarSelected}
                onChange={() => setHQSecurityBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">HQ 安檢長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={HQSecurityBarDescription}
                onChange={(e) => setHQSecurityBarDescription(e.target.value)}
              />
            </td>
            <td><HQSecurityChart setImage={setHQSecurityBarImage} /></td>
          </tr>
          <tr>
            <td className="text-center">
              <Form.Check
                type='checkbox'
                checked={AZSecurityBarSelected}
                onChange={() => setAZSecurityBarSelected(prev => !prev)}
              />
            </td>
            <td className="text-center">AZ 安檢長條圖</td>
            <td className="text-center">
              <Form.Control
                as='textarea'
                value={AZSecurityBarDescription}
                onChange={(e) => setAZSecurityBarDescription(e.target.value)}
              />
            </td>
            <td><AzSecurityChart setImage={setAZSecurityBarImage} /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AttendanceReport;

// All attendance BAR chart
// AZ attendance BAR chart
// HQ attendance BAR chart

// All attendance PIE chart
// AZ attendance PIE chart
// HQ attendance PIE chart

// All attendance weekly line chart
// AZ attendance weekly line chart
// HQ attendance weekly line chart