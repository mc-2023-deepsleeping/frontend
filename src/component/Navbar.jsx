import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Navbar.Brand className='navbar-brand' href='/' style={{ marginLeft: '15%' }}>
        員工進廠資訊整合平台
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ fontSize: '18px' }} href='/attendance'>
            出勤
          </Nav.Link>
          <Nav.Link style={{ fontSize: '18px' }} href='/security'>
            安檢
          </Nav.Link>
          <Nav.Link style={{ fontSize: '18px' }} href='/report'>
            週報
          </Nav.Link>
          <Nav.Link style={{ fontSize: '18px' }} href='/new'>
            新增人員
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
