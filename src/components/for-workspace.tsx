import {  Button, Col, Row } from "react-bootstrap";
import CrowkImg from "../assets/image/forcostomer.jpeg";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

export default function Forworkspace() {
  return (
    <>
    <Col>
      <Row className="flex flex-wrap p-0">
        <Col md={7} lg={6} xs={12} className="align-content-center for_workspace_maindiv">
          <Col md={10} xs={12} className="cowork_info_div top-0 border p-4">
            <Col className="cowork_info_inside_div">
              <h2 className="coworkfont pl-2 text-center">
              For Business
              </h2>
              <p className="pl-2 text-center">
              If you want to work together with us then join us.
              </p>
            </Col>
            <Col className="text-center">
            <Link className="text-center" to="/for-costomer">
                <Button className="text-primary bg-white m-auto zero_radius work_button">
                  For your Customers
                </Button>
              </Link>
              <br /><br />
              <Link className="text-center" to="/for-employee">
                <Button className="m-auto zero_radius work_button">
                  For your Employees
                </Button>
              </Link>
            </Col>
          </Col>
        </Col>
        <Col md={5} lg={6} xs={12} className="p-0 cwork_img">
          <img src={CrowkImg} alt="" className="w-100 h-100 object-fit-cover" />
        </Col>
      </Row>
    </Col>
    </>
  );
}
