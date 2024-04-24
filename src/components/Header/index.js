import React from 'react';
import {
  FaHome, FaSignInAlt, FaUserAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" alt="Home">
        <FaHome size={24} />
      </Link>
      <Link to="/register" alt="Registro">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login" alt="Login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
