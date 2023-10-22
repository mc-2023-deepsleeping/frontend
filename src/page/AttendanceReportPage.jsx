import MyNavbar from "../component/Navbar";
import AttendanceReport from "../component/AttendanceReport";
import MyFooter from "../component/MyFooter";

const AttendanceReportPage = () => {
  return (
    <>
      <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content', paddingBottom: '60px' }}>
        <MyNavbar />
        <AttendanceReport />
      </div>
      <MyFooter />
    </>

  )
}

export default AttendanceReportPage;