import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>© 2023 Meichu Hackathon Group 6</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
