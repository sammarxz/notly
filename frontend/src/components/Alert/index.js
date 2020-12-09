import React from 'react';
import PropTypes from 'prop-types';

import { AlertWrapper } from './styles';

const Alert = ({ children, onUndoDelete }) => (
  <AlertWrapper 
    className="d--flex ai--center jc--space-between bg--grey-09 c--white pt--8 pb--8 pl--8 pr--8"
  >
    <div>{children}</div>
    <button className="tt--uppercase fw--600" onClick={onUndoDelete}>
      Undo
    </button>
  </AlertWrapper>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onUndoDelete: PropTypes.func.isRequired
};

export { Alert }