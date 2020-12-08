import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Gravatar from 'react-gravatar';
import { RiLogoutCircleLine, RiAddFill } from 'react-icons/ri';

import { Navbar } from './styles';

import Logo from '../../assets/logo.svg';

const Nav = ({user: {email}, onLogout}) => {
  return (
    <Navbar className="d--flex jc--space-between ai--center fd--column">
      <div className="d--flex ai--center fd--column">
        <Link to="/notes">
          <img src={Logo} alt="Logo Notly.co" className="logo" />
        </Link>
        <button className="mt--32">
          <RiAddFill size="32px" className="c--blue-04" />
        </button>
      </div>
      <div className="d--flex ai--center fd--column">
        {/* <Avatar>
          <Gravatar email={email} size={36} />
        </Avatar> */}
        <button type="button" className="mt--32" onClick={onLogout}>
          <RiLogoutCircleLine size="24px" className="c--red" />
        </button>
      </div>
    </Navbar>
  );
};

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export { Nav }