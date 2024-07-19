import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-1 footer_main_div">
      <Container>
        <Row className="mt-3">
          <Col md={6} className="text-md-left d-flex align-items-center">
            <p className="footer_content">© 2024 Businesspass. All rights reserved.</p>
            <span className="vr mx-4"></span>
          </Col>
          <Col md={6} className="text-end text-md-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <Link to="#" className="text-white">Privacy Policy</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="#" className="text-white">Terms of Service</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="#" className="text-white">Cookies Settings</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>  
    </footer>
  );
}
