import React from 'react';
import MyNavbar from '../component/Navbar';
import MyFooter from '../component/MyFooter';
import AttendanceDetail from '../component/AttendanceDetail';

const AZAttendancePage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <AttendanceDetail area='AZ'/>
      <MyFooter />
    </div>
  );
}

export default AZAttendancePage;