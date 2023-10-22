import { Card, Button } from "react-bootstrap";
import AttendanceChart from "./AttendanceChart";
import data from '../testdata/punchCard';
import { useEffect, useState } from "react";
import './style.css'

const AttendanceContent = () => {
  const [hqEarlyCount, setHQEarlyCount] = useState(0);
  const [hqNormalCount, setHQNormalCount] = useState(0);
  const [hqLateCount, setHQLateCount] = useState(0);
  const [hqCount, setHQCount] = useState(0);
  const [azEarlyCount, setAZEarlyCount] = useState(0);
  const [azNormalCount, setAZNormalCount] = useState(0);
  const [azLateCount, setAZLateCount] = useState(0);
  const [azCount, setAZCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hqData = data.filter(data => data.area === 'HQ');
    const azData = data.filter(data => data.area === 'AZ');

    setHQCount(hqData.length);
    setAZCount(azData.length);

    // Count the number of Late true/false for each area
    const hqEarly = hqData.filter(data => data.status === 'early').length;
    const hqNormal = hqData.filter(data => data.status === 'normal').length;
    const hqLate = hqData.filter(data => data.status === 'late').length;
    const azEarly = azData.filter(data => data.status === 'early').length;
    const azNormal = azData.filter(data => data.status === 'normal').length;
    const azLate = azData.filter(data => data.status === 'late').length;

    setHQEarlyCount(hqEarly);
    setHQNormalCount(hqNormal);
    setHQLateCount(hqLate);
    setAZEarlyCount(azEarly);
    setAZNormalCount(azNormal);
    setAZLateCount(azLate);

    setLoading(false);
  }, [])

  return (
    loading ||
    <div style={{ paddingBottom: '120px' }}>
      <h2 style={{ marginLeft: '15%', marginTop: '30px' }}>出勤狀況</h2>
      <div
        style={{ marginLeft: '15%', marginTop: '30px', width: '70%' }}
        className="d-flex flex-row align-items-center"
      >
        <Card style={{ width: '450px' }}>
          <Card.Body>
            <Card.Title>總覽</Card.Title>
            <AttendanceChart />
          </Card.Body>
        </Card>
        <div style={{ width: 'fit-content', marginLeft: '150px' }}>
          <Card.Body>
            <Card.Title>異常比例</Card.Title>
            <Card.Text className="mt-4" style={{ fontSize: '25px' }}>
              <Button
                variant="warning"
                className="mb-4"
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                href='/attendance/HQ'
              >
                HQ
              </Button>
              <span
                className="ms-4 me-2"
                style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
              >
                {((hqLateCount + hqEarlyCount) / hqCount).toFixed(2) * 100}%
              </span>
            </Card.Text>
            <Card.Text style={{ fontSize: '25px' }}>
              <Button
                variant="warning"
                className="mb-4"
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                href='/attendance/AZ'
              >
                AZ
              </Button>
              <span
                className="ms-4"
                style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
              >
                {((azLateCount + azEarlyCount) / azCount).toFixed(2) * 100}%
              </span>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '60px', width: '70%' }}
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <div>
          <h3>寄送 Email 通知</h3>
          <p>聯繫主管與員工，一鍵完成。</p>
          <Button>寄送</Button>
        </div>
        <img src='personal-information.png' alt='personal-info' style={{ width: '200px' }} />
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '50px', width: '70%' }}
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <div>
          <h3>寄送週報</h3>
          <p>一週的出勤紀錄，一目了然。</p>
          <Button>前往週報</Button>
        </div>
        <img src='seo-report.png' alt='personal-info' style={{ width: '200px' }} />
      </div>
    </div>
  )
}

export default AttendanceContent;