import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/Rohit Files/Circle no bg 2.png";

export const Footer = () => {
  return (
    <footer className="footer" style={{paddingTop: '30px'}}>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}