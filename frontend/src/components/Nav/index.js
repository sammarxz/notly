import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Gravatar from 'react-gravatar';
import { RiLogoutCircleLine, RiAddFill, RiMenuLine, RiCloseFill } from 'react-icons/ri';

import { Navbar } from './styles';

import Logo from '../../assets/logo.svg';

const Nav = ({user: {email}, onLogout, onCreateNote, onShowNotes}) => {
  return (
    <Navbar className="d--flex jc--space-between ai--center fd--column">
      <div className="d--flex ai--center fd--column">
        <Link to="/notes">
          <img src={Logo} alt="Logo Notly.co" className="logo" />
        </Link>
        <button className="mt--32" onClick={() => onCreateNote()}>
          <RiAddFill size="32px" className="c--blue-04" />
        </button>
        <button
          onClick={onShowNotes}
          className="mobile-notes mt--32"
        >
          <RiMenuLine size="26px" className="c--blue-04" />
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

Nav.defaultProps = {
  onShowNotes: false
};

Nav.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateNote: PropTypes.func.isRequired,
  onShowNotes: PropTypes.bool
};

export { Nav }