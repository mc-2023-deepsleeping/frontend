import { Button } from "react-bootstrap";

const ReportEntrance = () => {
  return (
    <div style={{ width: '70%', marginLeft: '15%' }}>
      <h2 style={{ marginTop: '50px' }}>週報</h2>
      <p>手指輕點，輕鬆完成一週報表。</p>
      <div className="d-flex mt-5 flex-row justify-content-between align-items-center">
        <div className="d-flex ms-5 flex-column justify-content-between align-items-center">
          <img
            src='available.png'
            alt='attendance'
            style={{ width: '200px' }}
            className="mb-4"
          />
          <Button href='/report/attendance'>出勤週報</Button>
        </div>
        <div className="d-flex me-5 flex-column justify-content-between align-items-center">
          <img
            src='insurance.png'
            alt='security'
            style={{ width: '200px' }}
            className="mb-4"
          />
          <Button href='/report/security'>安檢週報</Button>
        </div>
      </div>
    </div>
  )
}

export default ReportEntrance;