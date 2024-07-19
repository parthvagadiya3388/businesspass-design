import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import 'react-phone-input-2/lib/style.css';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUserDelete } from 'react-icons/ai';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('personalInfo');

  return (
    <div className="p-3 Profile_Side_bar zero_radius">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            className={`nav-link btn btn-primary radius text-start zero_radius text_sidebar  ${activeLink === 'personalInfo' ? 'active text-white' : 'text-dark'}`}
            to="#"
            onClick={() => setActiveLink('personalInfo')}
          >
            <FaUser /> Personal Information
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link btn btn-primary radius text-start zero_radius text_sidebar ${activeLink === 'changePassword' ? 'active text-white' : 'text-dark'}`}
            to="#"
            onClick={() => setActiveLink('changePassword')}
          >
            <RiLockPasswordLine /> Change Password
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link btn btn-primary radius text-start zero_radius text_sidebar ${activeLink === 'deleteAccount' ? 'active text-white' : 'text-dark'}`}
            to="#"
            onClick={() => setActiveLink('deleteAccount')}
          >
            <AiOutlineUserDelete /> Delete Account
          </Link>
        </li>
      </ul>
    </div>
  );
}
