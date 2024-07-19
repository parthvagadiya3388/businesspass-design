import { Container, Button, Row, Col, Form, Badge } from "react-bootstrap";
import { FaArrowLeft , FaUser } from "react-icons/fa";
import img1 from "../assets/image/card1.png";
import img2 from "../assets/image/card2.png";
import img3 from "../assets/image/card3.png";
import img4 from "../assets/image/card4.png";
import img5 from "../assets/image/card5.png";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";

interface Product {
  id: number;
  title: string;
  location: string;
  image: string;
}

const productdata: Product[] = [
  {
    id: 0,
    title: "Creola Katherine Johnson",
    location: "Surat 395001",
    image: img1,
  },
  {
    id: 1,
    title: "Katherine Creola Johnson",
    location: "Amedabad 4545454",
    image: img2,
  },
  {
    id: 2,
    title: "Johnson Creola Katherine",
    location: "Rajkot 784545",
    image: img3,
  },
  {
    id: 3,
    title: "Creola Katherine Johnson",
    location: "Amedabad 985685",
    image: img4,
  },
  {
    id: 4,
    title: "Creola Katherine Johnson",
    location: "Amedabad 985685",
    image: img5,
  },
];

export default function WorkspaceDetails() {
  return (
    <div className="bg-white min-h-screen p-2">
      <Container>
        <Link to="/searching">
          <button className="btn btn-outline-dark text-gray-600 rounded-5">
            <FaArrowLeft className="h-5 w-5 inline-block mr-1" />
            Back to Searching
          </button>
        </Link>
      </Container>

      <Container>
        <h2 className="text-2xl font-bold mt-4"><strong>Carrer de Pallars, 194</strong></h2>
        <p className="text-gray-600">Barcelona, Barcelona 08005</p>
      </Container>

      <OwlCarousel
        className="owl-theme"
        loop
        margin={0}
        nav
        items={2}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
        navText={[
          "<div class='nav-btn prev-slide text-white btn rounded-5'>←</div>",
          "<div class='nav-btn next-slide text-white btn rounded-5'>→</div>",
        ]}
      >
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
        <div className="item">
          <img src={img5} alt="" />
        </div>
      </OwlCarousel>

      <Container>
        <Row>
          <h4 className="text-lg"><strong>Available Offers</strong></h4>
          <Col md={7} lg={7}>
            {productdata.map((card) => (
              <div className="bg-white p-3 mt-3 border rounded-md">
                <div className="card mt-2 zero_radius border_none" key={card.id}>
                  <div className="d-flex flex-wrap product_card_body_div">
                    <div className="col-sm-4 pl-0 pr-0 bg-black Product_imag_div">
                      <img
                        src={card.image}
                        className="w-100 h-100 object-fit-cover product_image"
                        alt="Product"
                      />
                    </div>
                    <div className="card-body col-sm-8 card_detail_div">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title">
                          <strong className="">1 Day Pass</strong>  
                          <Badge className="text-danger bg-danger-subtle p-1 ml-2">Discount</Badge>
                        </h5>
                      </div>
                      <p className="card-text p-0 m-0 card_paragrap_div">
                        Book access to coworking space or a private office for
                        the day
                      </p>

                      <div className="d-flex flex-wrap justify-content-between align-items-start mt-2 calander_div">
                        <span>
                          <CiCalendarDate />{" "}
                          <strong>20/06/2024 to 27/04/2024</strong>
                        </span>
                        <span>
                          <CiClock2 /> <strong>09:30 AM to 06:00 PM</strong>
                        </span>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mt-2 hour_content calander_div">
                        <span className="text-primary">
                          Starting at €12/hour
                        </span>
                        <span>
                          Need only <strong>2 keys</strong>
                        </span>
                        <Link
                          to="/details"
                          className="btn btn-primary mt-2 zero_radius"
                        >
                          Book Now!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={5}>
            <div className="bg-white p-4 mt-3 border rounded-md">
              <h3 className="text-lg"><strong>Information</strong></h3>
              <p>Please give me your contact information.</p>

              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bolder">Name</Form.Label>
                  <div className="input-group">
                    <span className="input_iconn">
                      <FaUser />
                    </span>
                    <Form.Control type="text" className="input_fild" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-bolder">Email</Form.Label>
                  <div className="input-group">
                    <span className="input_iconn">
                      <MdEmail />
                    </span>
                    <Form.Control type="email" className="input_fild" />
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
                  className="w-100 bg-primary mt-4 nextbutton zero_radius"
                >
                  Next
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5">
          <h4 className="text-lg"><strong>Explore other locations</strong></h4>
          <Col md={12} className="d-flex flex-wrap justify-content-between">
            {productdata.slice(0, 2).map((card) => (
              <div className="card col-md-6 mt-2 p-0 zero_radius end_card_margin explore_location" key={card.id}>
                <div className="d-flex flex-wrap product_card_body_div">
                  <div className="col-sm-4 pl-0 pr-0 bg-black Product_imag_div">
                    <img
                      src={card.image}
                      className="w-100 h-100 object-fit-cover product_image"
                      alt="Product"
                    />
                  </div>
                  <div className="card-body col-sm-8 p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">
                        <strong>{card.title}</strong>
                      </h5>
                    </div>
                    <p className="card-text p-0 m-0">{card.location}</p> <br />
                    <Link
                      to="/details"
                      className="btn btn-light btn-outline-primary zero_radius"
                    >
                      See Offer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
