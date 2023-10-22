import React from 'react';
import MyNavbar from '../component/Navbar';
import MyFooter from '../component/MyFooter';
import AttendanceDetail from '../component/AttendanceDetail';

const HQAttendancePage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <AttendanceDetail area='HQ'/>
      <MyFooter />
    </div>
  );
}

export default HQAttendancePage;