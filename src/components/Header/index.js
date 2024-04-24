import React from 'react';
import {
  FaHome, FaSignInAlt, FaUserAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/" alt="Home">
        <FaHome size={24} />
      </Link>
      <Link to="/login" alt="User">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout" alt="SignIn">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
