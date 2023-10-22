import React from 'react';
import MyNavbar from '../component/Navbar';
import AttendanceContent from '../component/AttendanceContent';
import MyFooter from '../component/MyFooter';

const AttendancePage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <AttendanceContent />
      <MyFooter />
    </div>
  );
}

export default AttendancePage;