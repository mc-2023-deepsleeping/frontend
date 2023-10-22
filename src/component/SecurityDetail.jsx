import HQSecurityChart from './HQSecurityChart';
import securityData from '../testdata/securityCheck';
import { Card, Button, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import './style.css'

const translationMap = {
  'early': '早到',
  'normal': '準時',
  'late': '遲到',
  'Laptop': '筆電',
  'ElectronicDevice': '電子設備',
  'Scissor': '剪刀',
  'Knife': '刀子',
  'Gun': '槍枝',
}

const SecurityDetail = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterEmpID, setFilterEmpID] = useState('');
  const [filterType, setFilterType] = useState('');
  const [timeOrder, setTimeOrder] = useState('asc');
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
      invalidItem: ['Laptop', 'ElectronicDevice'],
    },
  ]);
  const [filteredRecord, setFilteredRecord] = useState([]);

  useEffect(() => {
    const filtered = securityData.filter(data => data.area === props.area);
    const total = filtered.length;

    const items = {
      total,
      Scissor: filtered.filter(data => data.type === 'Scissor').length,
      Knife: filtered.filter(data => data.type === 'Knife').length,
      Gun: filtered.filter(data => data.type === 'Gun').length,
      Laptop: filtered.filter(data => data.type === 'Laptop').length,
      ElectronicDevice: filtered.filter(data => data.type === 'ElectronicDevice').length,
    }

    // Create the chart data
    setData(items);
    setRecord(record.filter(data => data.invalidItem.length > 0));
    setLoading(false);
  }, [])

  const handleFilter = () => {
    if (filterEmpID === '' && filterType === '') {
      setFilteredRecord([]);
      return;
    }
    let filtered = [];
    if (filterEmpID.length > 0 && filterType.length > 0) {
      filtered = record.filter(data => data.empID.toString() === filterEmpID);
      filtered = filtered.filter(data => data.invalidItem.includes(filterType));
    } else if (filterEmpID.length > 0) {
      filtered = record.filter(data => data.empID.toString() === filterEmpID);
    } else if (filterType.length > 0) {
      filtered = record.filter(data => data.invalidItem.includes(filterType));
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
    setFilterType('');
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
      <h2 style={{ marginLeft: '15%', marginTop: '30px' }}>{props.area} 安檢結果</h2>
      <div
        style={{ marginLeft: '15%', marginTop: '30px', width: '75%' }}
        className="d-flex flex-row align-items-center"
      >
        <Card style={{ width: '450px' }}>
          <Card.Body>
            <Card.Title>{props.area} 總覽</Card.Title>
            <HQSecurityChart />
            {/* {props.area === 'HQ' ? <HQSecurityChart /> : <AZAttendanceChart /> } */}
          </Card.Body>
        </Card>
        <div style={{ width: 'max-content', marginLeft: '10%' }}>
          <Card.Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
            正常
            <span
              className="ms-4 me-2"
              style={{ color: 'rgb(75,192,192)', fontWeight: 'bold', fontSize: '50px' }}
            >
              {(((data.total - data.Scissor - data.Knife - data.Gun - data.Laptop - data.ElectronicDevice) / data.total) * 100).toFixed(0)}%
            </span>
          </Card.Text>
          <Card.Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
            違規
            <span
              className="ms-4 me-2"
              style={{ color: 'rgb(253, 152, 49)', fontWeight: 'bold', fontSize: '50px' }}
            >
              {(((data.Scissor + data.Knife + data.Gun + data.Laptop + data.ElectronicDevice) / data.total) * 100).toFixed(0)}%
            </span>
          </Card.Text>
        </div>
      </div>
      <h3 style={{ marginLeft: '15%', marginTop: '50px' }}>{props.area} 安檢紀錄</h3>
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
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">篩選違規</option>
          <option value="Scissor">剪刀</option>
          <option value="Knife">刀子</option>
          <option value="Gun">槍枝</option>
          <option value="Laptop">筆電</option>
          <option value="ElectronicDevice">電子設備</option>
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

export default SecurityDetail;