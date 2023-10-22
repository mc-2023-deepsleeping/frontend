import MyNavbar from "../component/Navbar";
import MyFooter from "../component/MyFooter";
import SecurityDetail from "../component/SecurityDetail";

const AZSecurityPage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <SecurityDetail area='AZ'/>
      <MyFooter />
    </div>
  );
}

export default AZSecurityPage;