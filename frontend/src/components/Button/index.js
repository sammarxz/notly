import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

const Button = ({ className, type, color, textColor, size, disabled, onClick, children }) => (
  <Btn
    className={`${className} is--${size}`}
    onClick={onClick}
    type={type}
    size={size}
    color={color}
    textColor={textColor}
    disabled={disabled}
  >
    {children}
  </Btn>
);

Button.defaultProps = {
  className: '',
  type: 'button',
  color: 'blue-03',
  textColor: 'base-white',
  size: 'medium',
  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export { Button };
