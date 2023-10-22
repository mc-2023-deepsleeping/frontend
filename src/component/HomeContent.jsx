import React from 'react';
import { Button } from 'react-bootstrap';
import AttendanceChart from './AttendanceChart';
import './style.css'
import SecurityChart from './SecurityChart';

const HomeContent = () => {
  return (
    <div style={{ paddingBottom: '120px' }}>
      <div
        style={{ marginLeft: '15%', marginTop: '80px', width: '70%' }}
        className='d-flex flex-row justify-content-between align-items-center'
      >
        <div>
          <h2>立即與AI交談</h2>
          <p>享受AI為您打造的便利管理環境，即時獲得支援。</p>
          <Button>取得協助</Button>
        </div>
        <img
          src='friends.png'
          alt='friends'
          style={{ width: '200px' }}
          className='float-end'
        />
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '120px', width: '70%' }}
        className='d-flex flex-row justify-content-between align-items-center'
      >
        <AttendanceChart />
        <div>
          <h2>出勤狀況</h2>
          <p>即時得知出勤狀況，並可進行篩選。</p>
          <Button href='/attendance'>查看詳情</Button>
        </div>
      </div>
      <div
        style={{ marginLeft: '15%', marginTop: '120px', width: '70%' }}
        className='d-flex flex-row justify-content-between align-items-center'
      >
        <div>
          <h2>安檢結果</h2>
          <p>各廠區的安檢結果一目了然。</p>
          <Button href='/security'>查看詳情</Button>
        </div>
        <SecurityChart />
      </div>
    </div>
  );
};

export default HomeContent;
