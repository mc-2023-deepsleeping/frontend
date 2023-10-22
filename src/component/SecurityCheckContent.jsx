import SecurityChart from "./SecurityChart";
import { Card, Button } from "react-bootstrap";
import data from '../testdata/securityCheck'
import { useEffect, useState } from "react";

const SecurityCheckContent = () => {
  const [hqInvalidItem, setHQInvalidItem] = useState({
    Scissor: 0,
    Knife: 0,
    Gun: 0,
    Laptop: 0,
    ElectronicDevice: 0,
  });
  const [azInvalidItem, setAZInvalidItem] = useState({
    Scissor: 0,
    Knife: 0,
    Gun: 0,
    Laptop: 0,
    ElectronicDevice: 0,
  });
  const [hqCount, setHQCount] = useState(0);
  const [azCount, setAZCount] = useState(0);

  useEffect(() => {
    const hqData = data.filter(data => data.area === 'HQ');
    const azData = data.filter(data => data.area === 'AZ');

    setHQCount(hqData.length);
    setAZCount(azData.length);

    setHQInvalidItem({
      Scissor: hqData.filter(data => data.type === 'Scissor').length,
      Knife: hqData.filter(data => data.type === 'Knife').length,
      Gun: hqData.filter(data => data.type === 'Gun').length,
      Laptop: hqData.filter(data => data.type === 'Laptop').length,
      ElectronicDevice: hqData.filter(data => data.type === 'ElectronicDevice').length,
    })

    setAZInvalidItem({
      Scissor: azData.filter(data => data.type === 'Scissor').length,
      Knife: azData.filter(data => data.type === 'Knife').length,
      Gun: azData.filter(data => data.type === 'Gun').length,
      Laptop: azData.filter(data => data.type === 'Laptop').length,
      ElectronicDevice: azData.filter(data => data.type === 'ElectronicDevice').length,
    })
  }, [])

  return (
    <div style={{ paddingBottom: '120px' }}>
      <h2 style={{ marginLeft: '15%', marginTop: '30px' }}>安檢結果</h2>
      <div
        style={{ marginLeft: '15%', marginTop: '30px', width: '70%' }}
        className="d-flex flex-row align-items-center"
      >
        <Card style={{ width: '450px' }}>
          <Card.Body>
            <Card.Title>總覽</Card.Title>
            <SecurityChart />
          </Card.Body>
        </Card>
        <div style={{ width: 'fit-content', marginLeft: '150px' }}>
          <Card.Body>
            <Card.Title>違規比例</Card.Title>
            <Card.Text className="mt-4" style={{ fontSize: '25px' }}>
              <Button
                variant="warning"
                className="mb-4"
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                href='/security/HQ'
              >
                HQ
              </Button>
              <span
                className="ms-4 me-2"
                style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
              >
                {((hqInvalidItem.ElectronicDevice + hqInvalidItem.Gun + hqInvalidItem.Knife + hqInvalidItem.Laptop + hqInvalidItem.Scissor) / hqCount).toFixed(2) * 100}%
              </span>
            </Card.Text>
            <Card.Text style={{ fontSize: '25px' }}>
              <Button
                variant="warning"
                className="mb-4"
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                href='/security/AZ'
              >
                AZ
              </Button>
              <span
                className="ms-4"
                style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
              >
                {((azInvalidItem.ElectronicDevice + azInvalidItem.Gun + azInvalidItem.Knife + azInvalidItem.Laptop + azInvalidItem.Scissor) / azCount).toFixed(2) * 100}%
              </span>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '80px', width: '70%' }}
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <div>
          <h3>安檢機器狀態</h3>
          <p>從歷史中學習規律，提早通知廠商維修。</p>
          <Button>通知廠商</Button>
        </div>
        <img src='personal-information.png' alt='personal-info' style={{ width: '200px' }} />
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '50px', width: '70%' }}
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <div>
          <h3>寄送週報</h3>
          <p>一週的安檢結果，一目了然。</p>
          <Button>前往週報</Button>
        </div>
        <img src='seo-report.png' alt='personal-info' style={{ width: '200px' }} />
      </div>
    </div>
  )
}

export default SecurityCheckContent;