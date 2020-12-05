import  React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const Home = () => (
  <header>
    <img src={Logo} alt="Logo anoite.co" />
    <h1>Home</h1>
    <Link to="/notes">Notes</Link>
  </header>
);

export default Home;
