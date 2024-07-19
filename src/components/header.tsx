import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg header_div">
        <div className="container p-2">
          <Link className="navbar-brand" to="/cowork-registration">
            <img src={Logo} alt="Logo" className="logoimg"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/for-business">
                  For Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/for-workspace">
                  For Work Space
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
