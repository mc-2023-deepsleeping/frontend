import MyNavbar from "../component/Navbar";
import AttendanceContent from "../component/AttendanceContent";
import MyFooter from "../component/MyFooter";
import SecurityCheckContent from "../component/SecurityCheckContent";

const SecurityCheck = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <SecurityCheckContent />
      <MyFooter />
    </div>
  )
}

export default SecurityCheck;