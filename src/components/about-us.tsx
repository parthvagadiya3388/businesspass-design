import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/image/office.jpeg";
import { FaCheckCircle } from "react-icons/fa";

const services: string[] = [
  'Global accessibility',
  'Priority Services and Amenities',
  'Tailored Safety Measures',
  'Data Security',
  'Cost-Effectiveness',
  'Private Rooms',
  'Streamlined Booking Process',
  'Priority service request',
];

const AboutUs: React.FC = () => {
  const firstHalf = services.slice(0, 4);
  const secondHalf = services.slice(4, 8);

  const listservices1 = firstHalf.map((first, index) => (
    <li key={index}>
      <FaCheckCircle /> {first}
    </li>
  ));
  
  const listservices2 = secondHalf.map((second, index) => (
    <li key={index}>
      <FaCheckCircle /> {second}
    </li>
  ));

  return (
    <>
      <Container fluid>
        <Row className="w-100 h-100">
          <Col md={6} sm={12} className="p-3">
            <div className="paragraph_div">
              <p className="">
                "In the modern office, connections are the currency of success,
                and collaboration is the key to unlocking limitless potential."
              </p>
              <h2 className="about_heading">
                Why <strong className="text-primary">Businesspass?</strong>
              </h2>
              <p className="">
              As companies deeply committed to nurturing their global network of exceptional talent, we understand the paramount importance of facilitating connections, fostering collaboration, and empowering its workforce to thrive on a worldwide scale. For companies as such global business isn't just a convenience—it's an indispensable tool for cultivating innovation, strengthening partnerships, and achieving unparalleled success.
              </p>
              <p className="">
              In today's interconnected business landscape, esteemed partners are scattered across the globe, each bringing their unique expertise and insights to the table. Global business serves as a vital conduit for team members to engage with clients, attend industry events, and cultivate relationships with fellow professionals, all of which are essential for driving growth and staying ahead of the curve.
              </p>
              <p className="">
              That's why we place immense value on the concept of the business pass. Far more than just a credential, it represents a gateway to opportunity and a testament to our unwavering commitment to empowering workforce. With the business pass, employees have the freedom to traverse continents, seize new prospects, and collaborate with colleagues from diverse backgrounds, all while knowing they have the support and resources of your company behind them.
              </p>
              <p className="">
              In the fast-paced world of modern business, success hinges on the ability to forge meaningful connections and leverage collective expertise. Through the strategic use of the business pass, companies can unlock the full potential of its global talent pool, driving innovation, and achieving unparalleled success in the process."
              </p>
            </div>
          </Col>
          <Col md={6} sm={12} className="About_image_col">
            <div className="w-100 h-50 About_Image_div About_image">
              <img src={img1} className="About_image object-fit-cover" alt="Office" />
            </div>
            <div className="list_item d-flex flex-wrap">
              <ul className="List_ul">{listservices1}</ul>
              <ul className="List_ul">{listservices2}</ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
