import MyNavbar from "../component/Navbar";
import ReportEntrance from "../component/ReportEntrance";
import MyFooter from "../component/MyFooter";
import AttendanceReport from "../component/AttendanceReport";

const ReportPage = () => {
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

export default ReportPage;