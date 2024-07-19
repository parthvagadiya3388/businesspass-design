import { Col, Form, InputGroup, Row } from "react-bootstrap";
import img1 from "../assets/image/card1.png";
import img2 from "../assets/image/card2.png";
import img3 from "../assets/image/card3.png";
import img4 from "../assets/image/card4.png";
import img5 from "../assets/image/card5.png";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  location: string;
  rating: number;
  image: string;
  price: number;
}

const productdata: Product[] = [
  {
    id: 0,
    title: "Creola Katherine Johnson",
    location: "Surat 395001",
    rating: 4.5,
    image: img1,
    price: 15,
  },
  {
    id: 1,
    title: "Katherine Creola Johnson",
    location: "Amedabad 4545454",
    rating: 4.4,
    image: img2,
    price: 18,
  },
  {
    id: 2,
    title: "Johnson Creola Katherine",
    location: "Rajkot 784545",
    rating: 3.5,
    image: img3,
    price: 23,
  },
  {
    id: 3,
    title: "Creola Katherine Johnson",
    location: "Amedabad 985685",
    rating: 3.5,
    image: img4,
    price: 24,
  },
  {
    id: 4,
    title: "Creola Katherine Johnson",
    location: "Amedabad 985685",
    rating: 3.5,
    image: img5,
    price: 24,
  },
];

const Searching: React.FC = () => {
  return (
    <>
      <Col className="main_search_container container-fluid container-md">
        <Row>
          <Col className="p-4 wlc_card" sm={12} md={12} lg={6}>
            <h4 className="pb-2">
              Explore inspiring spaces in{" "}
              <strong className="text-primary"> Spain</strong>
            </h4>

            <div className="d-flex mb-3">
              <InputGroup.Text id="basic-addon1" className='w-100 bg-white border_radias no-hover'>
              <Form.Control
                className="zero_radius searching_input border-0"
                 placeholder="Search for workspaces..."
              >
              </Form.Control>
                <button className='btn btn-primary border_radias'>Search</button>
              </InputGroup.Text>
            </div>

            <div className="w-100 d-flex justify-content-between flex-wrap">
              <select
                className="form-select col-md-4 col-sm-6 mt-2 drops_radis"
                aria-label="Select walking distance"
                defaultValue="Walking Distance"
              >
                <option value="Walking Distance">Select Country</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Viet Nam</option>
              </select>
              <select
                className="form-select col-md-4 col-sm-6 mt-2 drops_radis"
                aria-label="Select workspace type"
                defaultValue="Workspace type"
              >
                <option value="Workspace type">Workspace type</option>
                <option value="coworking">Coworking</option>
                <option value="private_office">Private Office</option>
                <option value="conference_room">Conference Room</option>
              </select>
              <select
                className="form-select col-md-4 col-sm-12 mt-2 drops_radis"
                aria-label="Select capacity"
                defaultValue="Capacity"
              >
                <option value="Capacity">Person Capacity</option>
                <option value="small">1-5 people</option>
                <option value="medium">6-15 people</option>
                <option value="large">16-50 people</option>
              </select>
            </div>
            <hr />

            {productdata.map((card) => (
              <div className="card mt-2 zero_radius" key={card.id}>
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
                      <h5 className="card-title"><strong>{card.title}</strong></h5>
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

          <Col sm={12} md={12} lg={6} className="image_main">
            <div className="w-100 h-100">
              <div className="card drops_radis">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5887.207649501971!2d70.79030985340661!3d22.302566849901112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13ff465c15439433%3A0x120b3071a67f4d2a!2sFun%20World!5e0!3m2!1sen!2sin!4v1715855395707!5m2!1sen!2sin"
                  width="100%"
                  height="600px"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Searching;
