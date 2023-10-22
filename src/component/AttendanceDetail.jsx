import HQAttendanceChart from "./HQAttendanceChart";
import data from '../testdata/punchCard';
import { Card, Button, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import './style.css'
import AZAttendanceChart from "./AZAttendanceChart";

const translationMap = {
  'early': '早到',
  'normal': '準時',
  'late': '遲到',
  'Laptop': '筆電',
  'ElectronicDevice': '電子設備',
  'Scissor': '剪刀',
  'Knife': '刀',
  'Gun': '槍',
}

const AttendanceDetail = (props) => {
  const [earlyCount, setEarlyCount] = useState(0);
  const [normalCount, setNormalCount] = useState(0);
  const [lateCount, setLateCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [filterEmpID, setFilterEmpID] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [record, setRecord] = useState([
    {
      empID: 123,
      time: '2021-10-01 09:00:00',
      status: 'early',
      invalidItem: ['Scissor', 'Gun'],
    },
    {
      empID: 123,
      time: '2021-10-01 08:00:00',
      status: 'normal',
      invalidItem: ['Knife'],
    },
    {
      empID: 125,
      time: '2021-10-01 07:00:00',
      status: 'late',
      invalidItem: [],
    },
  ]);
  const [filteredRecord, setFilteredRecord] = useState([]);
  const [timeOrder, setTimeOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  const fetchRecord = async () => {
    // Fetch record from backend
  }

  useEffect(() => {
    const areaData = data.filter(data => data.area === props.area);

    // Count the number of onTime true/false for each area
    const early = areaData.filter(data => data.status === 'early').length;
    const normal = areaData.filter(data => data.status === 'normal').length;
    const late = areaData.filter(data => data.status === 'late').length;

    setEarlyCount(early);
    setNormalCount(normal);
    setLateCount(late);
    setTotal(areaData.length);

    fetchRecord();
    setLoading(false);
  }, [])

  const handleFilter = () => {
    if (filterEmpID === '' && filterStatus === '') {
      setFilteredRecord([]);
      return;
    }
    let filtered = [];
    if (filterEmpID.length > 0) {
      filtered = record.filter(data => data.empID.toString() === filterEmpID);
    }
    if (filterStatus.length > 0) {
      filtered = filtered.filter(data => data.status === filterStatus);
    }
    if (filtered.length === 0) {
      alert('找不到對應資料。');
      return;
    }
    setFilteredRecord(filtered);
  }

  const handleClearFilter = () => {
    if (timeOrder === 'desc') {
      setFilteredRecord(record.sort((a, b) => new Date(a.time) - new Date(b.time)));
    } else {
      setFilteredRecord(record.sort((a, b) => new Date(b.time) - new Date(a.time)));
    }
    setFilterEmpID('');
    setFilterStatus('');
  }

  const handleChangeOrder = () => {
    if (timeOrder === 'asc') {
      if (filteredRecord.length > 0) {
        setFilteredRecord(filteredRecord.sort((a, b) => new Date(a.time) - new Date(b.time)));
      } else {
        setFilteredRecord(record.sort((a, b) => new Date(a.time) - new Date(b.time)));
      }
      setTimeOrder('desc');
    } else {
      if (filteredRecord.length > 0) {
        setFilteredRecord(filteredRecord.sort((a, b) => new Date(b.time) - new Date(a.time)));
      } else {
        setFilteredRecord(record.sort((a, b) => new Date(b.time) - new Date(a.time)));
      }
      setTimeOrder('asc');
    }
  }

  return (
    loading ||
    <div style={{ paddingBottom: '20px' }}>
      <h2 style={{ marginLeft: '15%', marginTop: '30px' }}>{props.area} 出勤狀況</h2>
      <div
        style={{ marginLeft: '15%', marginTop: '30px', width: '70%' }}
        className="d-flex flex-row align-items-center"
      >
        <Card style={{ width: '450px' }}>
          <Card.Body>
            <Card.Title>{props.area} 總覽</Card.Title>
            {props.area === 'HQ' ? <HQAttendanceChart /> : <AZAttendanceChart /> }
          </Card.Body>
        </Card>
        <div style={{ width: 'max-content', marginLeft: '120px' }}>
          {/* <Card.Title>統計數據</Card.Title> */}
          <Card.Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
            早到
            <span
              className="ms-4 me-2"
              style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
            >
              {earlyCount}
            </span>
            / {total}
          </Card.Text>
          <Card.Text className="mt-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
            準時
            <span
              className="ms-4 me-2"
              style={{ color: 'rgb(75,192,192)', fontWeight: 'bold', fontSize: '50px' }}
            >
              {normalCount}
            </span>
            / {total}
          </Card.Text>
          <Card.Text className="mt-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>
            遲到
            <span
              className="ms-4 me-2"
              style={{ color: 'rgb(255, 99, 132)', fontWeight: 'bold', fontSize: '50px' }}
            >
              {lateCount}
            </span>
            / {total}
          </Card.Text>
        </div>
      </div>
      <h3 style={{ marginLeft: '15%', marginTop: '50px' }}>{props.area} 出勤紀錄</h3>
      <Form style={{ marginLeft: '15%' }} className="d-flex mt-3">
        <Form.Control
          className="me-3"
          style={{ width: '200px' }}
          placeholder="篩選員工編號"
          value={filterEmpID}
          onChange={(e) => setFilterEmpID(e.target.value)}
        />
        <Form.Select
          className="me-3"
          style={{ width: '200px' }}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">篩選狀態</option>
          <option value="early">早到</option>
          <option value="normal">準時</option>
          <option value="late">遲到</option>
        </Form.Select>
        <Button variant="success" className="me-3" onClick={handleFilter}>
          篩選
        </Button>
        <Button variant="danger" onClick={handleClearFilter}>
          清除
        </Button>
      </Form>
      <Table
        striped
        bordered
        style={{ marginLeft: '15%', marginTop: '20px', width: '70%' }}
      >
        <thead>
          <tr>
            <th>員工編號</th>
            <th>上班時間&nbsp;
              {timeOrder === 'desc' ?
                <BiSolidUpArrow className="order-icon" onClick={handleChangeOrder} />
                :
                <BiSolidDownArrow className="order-icon" onClick={handleChangeOrder} />
              }
            </th>
            <th>狀態</th>
            <th>攜帶違禁品</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecord.length > 0 ?
            filteredRecord.map((data, index) => (
              <tr key={index}>
                <td>{data.empID}</td>
                <td>{data.time}</td>
                <td>{translationMap[data.status]}</td>
                <td>
                  {data.invalidItem.length > 0 ?
                    data.invalidItem.map(ele => translationMap[ele]).join(', ')
                    :
                    '無'
                  }
                </td>
              </tr>
            ))
            :
            record.map((data, index) => (
              <tr key={index}>
                <td>{data.empID}</td>
                <td>{data.time}</td>
                <td>{translationMap[data.status]}</td>
                <td>
                  {data.invalidItem.length > 0 ?
                    data.invalidItem.map(ele => translationMap[ele]).join(', ')
                    :
                    '無'
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default AttendanceDetail;