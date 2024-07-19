import { Form, Button, Col, Row } from "react-bootstrap";
import CrowkImg from "../assets/image/forbusiness.jpeg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Forbussiness() {
  return (
    <>
     <Row className="container-fluid container-md m-auto m-0 p-0 pt-4">
        <Col md={6} sm={9}>
            <div className="forbus_div">
                <h5 className="forbus_heading">For current <span className="text-primary">workspace</span></h5>
                <p>If you have a workspace business account please login </p>
            </div>
        </Col>    
        <Col md={6} sm={3} className="login_button">
            <div>
                <Button className="zero_radius">Login</Button>
            </div>
        </Col>
    </Row>   
    <Col>
      <Row className="flex flex-wrap p-0">
        <Col md={7} lg={6} xs={12} className="p-2 cowork_info_main_div">
          <Col md={10} xs={12} className="cowork_info_div border p-4">
            <Col className="cowork_info_inside_div">
              <h2 className="coworkfont pl-2">
                Connect with our partnerships team
              </h2>
              <p className="pl-2">
                We're always looking to work with the best spaces around the
                world.
              </p>
              <Form className="d-flex flex-wrap">
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-bolder">Name</Form.Label>
                    <div className="input-group">
                      <span className="input_iconn">
                        <FaUser />
                      </span>
                      <Form.Control type="text" className="input_fild" />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="fw-bolder">Email</Form.Label>
                    <div className="input-group">
                      <span className="input_iconn">
                        <MdEmail />
                      </span>
                      <Form.Control type="email" className="input_fild" />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formPosition">
                    <Form.Label className="fw-bolder">Position</Form.Label>
                    <div className="input-group">
                      <span className="input_iconn">
                        <TbUserHexagon />
                      </span>
                      <Form.Control type="text" className="input_fild" />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formPhoneNumber">
                    <Form.Label className="fw-bolder">Phone Number</Form.Label>
                    <PhoneInput
                      country={"in"}
                      containerClass="w-100"
                      inputClass="w-100"
                      />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-4" controlId="formCoworkName">
                    <Form.Label className="fw-bolder">Address</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        as="textarea"
                        placeholder="Enter your workspace address"
                        style={{ height: "100px" }}
                        />
                    </div>
                  </Form.Group>
                </Col>
                <Button type="submit" className="w-100 mt-4 zero_radius">
                  Contact for create a workspaces
                </Button>
              </Form>
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
