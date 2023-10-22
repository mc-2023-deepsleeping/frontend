import MyNavbar from "../component/Navbar";
import MyFooter from "../component/MyFooter";
import SecurityDetail from "../component/SecurityDetail";

const HQSecurityPage = () => {
  return (
    <div style={{ background: 'rgb(250, 250, 250)', height: 'max-content' }}>
      <MyNavbar />
      <SecurityDetail area='HQ'/>
      <MyFooter />
    </div>
  );
}

export default HQSecurityPage;