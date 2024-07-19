import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.png";
import Profile from "../assets/image/profile.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCaretDown, FaChevronRight } from "react-icons/fa";
import { Dropdown, Offcanvas, Button } from "react-bootstrap";
import { MdExitToApp } from "react-icons/md";

export default function Profileheader() {
  const fullname = 'Tony Patel';
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setShowOffcanvas(!showOffcanvas);
    }
  };

  const handleClose = () => setShowOffcanvas(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg header_div">
        <div className="container p-1 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/cowork-registration">
            <img src={Logo} alt="Logo" className="logoimg" />
          </Link>

          <Dropdown className="d-flex align-items-center d-none d-md-flex">
            <Dropdown.Toggle className="bg-transparent border-0 d-flex align-items-center">
              <img src={Profile} alt="Profile" className="rounded-circle profile-img" />
              <span className="ml-2 text-black">{fullname}</span>
              <FaCaretDown className="ml-1 text-black" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" className="mt-2 p-2 profile_dropdown">
            <img src={Profile} alt="Profile" className="rounded-circle profile-img" />
            <span className="ml-2 text-black">{fullname}</span><hr />
              <Dropdown.Item as={Link} to="/personal-information" className="d-flex justify-content-between">Personal Information <FaChevronRight className="mt-1 ml-3" /></Dropdown.Item>
              <Dropdown.Item as={Link} to="#" className="d-flex justify-content-between">My Bookings <FaChevronRight className="mt-1"/></Dropdown.Item>
              <Dropdown.Item as={Link} to="#" className="d-flex justify-content-between">Wallet <FaChevronRight className="mt-1"/> </Dropdown.Item> <hr />
              <Dropdown.Item as={Link} to="#"  className="d-flex justify-content-between text-danger">Sign out <MdExitToApp className="mt-1" /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <Button variant="" className="d-md-none p-0" onClick={handleToggle}>
            <img src={Profile} alt="Profile" className="rounded-circle profile-img" />
            <span className="ml-2 text-black">{fullname}</span>
            <FaCaretDown className="ml-1 text-black" />
          </Button>

          <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Profile Menu</Offcanvas.Title>
            </Offcanvas.Header> <hr />
            <Offcanvas.Body>
              <Link className="dropdown-item " to="#" onClick={handleClose}>Personal Information</Link>
              <Link className="dropdown-item" to="#" onClick={handleClose}>My Bookings </Link>
              <Link className="dropdown-item" to="#" onClick={handleClose}>Wallet </Link><hr />
              <Link className="dropdown-item d-flex justify-content-between text-danger" to="#" onClick={handleClose}>Sign out <MdExitToApp className="mt-1" /></Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
}
