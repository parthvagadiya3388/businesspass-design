import Profile from '../assets/image/profile.jpeg';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {  TbHexagonLetterNFilled, TbPhotoPlus, TbUserHexagon } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { CiUser } from 'react-icons/ci';
import Sidebar from './sidebar';

const Personalinformation: React.FC = () => {  
  return (
    <>
      <Container>
        <Row>
          <div className='pt-2 text-md-start text-sm-center text-center'>
            <h2><strong>My Profile</strong></h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <Col md={3} className=''>
              <Sidebar/>
          </Col>

          <Col className="wlc_card align-content-center" md={9}>
            <Card className="p-4 main_card zero_radius">
              <h4 className="">
                <strong>
                  <CiUser className='mb-1' /> Personal Information
                </strong>
              </h4>
              <div className='d-flex flex-wrap product_card_body_div pt-2'>
                <div className='col-sm-4 pl-0 pr-0 text-center rounded-circle Product_imag_profile'>
                  <img src={Profile} className="w-100 h-100 rounded-circle object-fit-cover" alt="Profile" />
                </div>
                <div className="card-body col-sm-8">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-title Prof_name">Tony patel</h4>
                  </div>
                  <p className="card-text p-0 m-0 Prof_compnay_name">Bank of America</p> <br />
                  <div className='Profile_button_div'>
                    <a href="#" className="btn btn-light btn-outline-primary zero_radius">
                      <TbPhotoPlus  className='mb-1'/>  Add Image
                    </a>
                  </div>
                </div>
              </div>

              <Form>
                <Row className="d-flex flex-wrap p-2">  
                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-bolder">First Name</Form.Label>
                    <div className="input-group">
                        <span className="input_iconn">
                          <FaUser />
                        </span>
                      <Form.Control
                        type="text"
                        className="input_fild"
                        placeholder='Enter your first name'
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-bolder">Last Name</Form.Label>
                    <div className="input-group">
                        <span className="input_iconn">
                          <FaUser />
                        </span>
                      <Form.Control
                        type="text"
                        className="input_fild"
                        placeholder='Enter your last name'
                      />
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
                      <Form.Control
                        type="email"
                        className="input_fild"
                        placeholder='Enter your email'
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formPhoneNumber">
                    <Form.Label className="fw-bolder">Phone</Form.Label>
                    <PhoneInput
                      country={"in"}
                      containerClass="w-100"
                      inputClass="w-100"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formCoworkName">
                    <Form.Label className="fw-bolder">Nick Name</Form.Label>
                    <div className="input-group">
                        <span className="input_iconn">
                          <TbHexagonLetterNFilled />
                        </span>
                      <Form.Control
                        type="text"
                        className="input_fild"
                        placeholder='Enter your nick name'
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4" controlId="formPosition">
                    <Form.Label className="fw-bolder">City</Form.Label>
                    <div className="input-group">
                        <span className="input_iconn">
                          <TbUserHexagon />
                        </span>
                      <Form.Control
                        type="text"
                        className="input_fild"
                        placeholder='Enter your city'
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={12}>
                    <Form.Group className="mb-4" controlId="formCoworkName">
                        <Form.Label className="fw-bolder">Additional information</Form.Label>
                          <div className="input-group">
                            <Form.Control
                              as="textarea"
                              style={{ height: "100px" }}
                              placeholder="Enter your additional information"
                              />
                          </div>
                      </Form.Group>
                </Col>
                
                  <div className='text-end'>
                    <Button
                      type="submit"
                      className="zero_radius"
                      >
                      Update
                    </Button>
                  </div>
                </Row>
              </Form>

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Personalinformation;
