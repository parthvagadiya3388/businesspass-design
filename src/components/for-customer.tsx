import {  Button, Col, Row , Form } from "react-bootstrap";
import CrowkImg from "../assets/image/forbusinesss.jpeg";
import "react-phone-input-2/lib/style.css";
import { TbUserHexagon } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";

export default function Forcustomer() {
  return (
    <>
    <Col>
      <Row className="flex flex-wrap p-0">
        <Col md={7} lg={6} xs={12} className="align-content-center for_workspace_maindiv">
          <Col md={10} xs={12} className="cowork_info_div top-0 border p-2">
            <Col className="cowork_info_inside_div">
              <h2 className="coworkfont pl-2">
                For Customers
              </h2>
              <p className="pl-2">
              If you want to work together with us then join us.
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
                    <Form.Label className="fw-bolder">Company Name  </Form.Label>
                    <div className="input-group">
                      <span className="input_iconn">
                        <RiShoppingBag4Fill />
                      </span>
                      <Form.Control type="text" className="input_fild" />
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
                  <Form.Group className="mb-4" controlId="formPosition">
                    <Form.Label className="fw-bolder">Country</Form.Label>
                    <Form.Select aria-label="Default select example" className="zero_radius">
                        <option>select the contry</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="India">India</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Viet Nam</option>
                    </Form.Select>
                  </Form.Group> 
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formPosition">
                    <Form.Label className="fw-bolder">How many person</Form.Label>
                    <Form.Select aria-label="Default select example" className="zero_radius">
                        <option>Select how many person</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group> 
                </Col>
                <Button type="submit" className="w-100 mt-4 zero_radius">
                  Confirm
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
