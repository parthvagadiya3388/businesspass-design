import { Form, Button, Col, Row } from "react-bootstrap";
import CrowkImg from "../assets/image/cowor.jpeg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbUserHexagon } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Coworkregistration() {
  return (
    <Col>
      <Row className="flex flex-wrap p-0">
        <Col md={6} lg={6} xs={12} className="p-2 cowork_info_main_div">
          <Col md={10} xs={12} className="cowork_info_div border">
            <Col className="cowork_info_inside_div">
              <h2 className="coworkfont">Cowork information</h2>
              <p>Please verify your account details for connect with us.</p>
              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bolder">Name</Form.Label>
                  <div className="input-group">
                      <span className="input_iconn">
                        <FaUser />
                      </span>
                    <Form.Control
                      type="text"
                      className="input_fild"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-bolder">Email</Form.Label>
                  <div className="input-group">
                      <span className="input_iconn">
                        <MdEmail />
                      </span>
                    <Form.Control
                      type="email"
                      className="input_fild"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formCoworkName">
                  <Form.Label className="fw-bolder">Cowork Name</Form.Label>
                  <div className="input-group">
                      <span className="input_iconn">
                        <HiUsers />
                      </span>
                    <Form.Control
                      type="text"
                      className="input_fild"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPosition">
                  <Form.Label className="fw-bolder">Position</Form.Label>
                  <div className="input-group">
                      <span className="input_iconn">
                        <TbUserHexagon />
                      </span>
                    <Form.Control
                      type="text"
                      className="input_fild"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPhoneNumber">
                  <Form.Label className="fw-bolder">Phone Number</Form.Label>
                  <PhoneInput
                    country={"in"}
                    containerClass="w-100"
                    inputClass="w-100"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100 mt-4 nextbutton zero_radius"
                >
                  Next
                </Button>
              </Form>
            </Col>
          </Col>
        </Col>
        <Col md={6} lg={6} xs={12} className="p-0 cwork_img">
          <img src={CrowkImg} alt="" className="w-100 h-100 object-fit-cover" />
        </Col>
      </Row>
    </Col>
  );
}
