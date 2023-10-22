import Homepage from './page/Homepage';
import AttendancePage from './page/AttendancePage';
import SecurityCheck from './page/SecurityCheck';
import HQAttendancePage from './page/HQAttendancePage';
import AZAttendancePage from './page/AZAttendancePage';
import HQSecurityPage from './page/HQSecurityPage';
import AZSecurityPage from './page/AZSecurityPage';
import ReportPage from './page/ReportPage';
import AttendanceReportPage from './page/AttendanceReportPage';
import NewEmp from './page/NewEmp';
import fetchAttd from './util/fetchAttd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import './App.css'
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {

  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/security" element={<SecurityCheck />} />
          <Route path="/attendance/HQ" element={<HQAttendancePage />} />
          <Route path="/attendance/AZ" element={<AZAttendancePage />} />
          <Route path="/security/HQ" element={<HQSecurityPage />} />
          <Route path="/security/AZ" element={<AZSecurityPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/new" element={<NewEmp />} />
          {/* <Route path="/report/attendance" element={<AttendanceReportPage />} /> */}
        </Routes>
      </Router>
      <div className="chatbot-container">
        <div className="chatbot-button" onClick={toggleChatbot}>
          {isChatbotOpen ? "Hide Chat" : "Show Chat"}
        </div>
        {isChatbotOpen && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>
    </>
  );
}

export default App;
