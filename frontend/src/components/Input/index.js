import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Wrapper, Field, Label } from './styles';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focussed: (props.locked && props.focussed) || false,
      value: props.value || '',
      error: props.error || '',
      showPassword: false,
    };
  }

  onChange = (e) => {
    const { id } = this.props;
    const { value } = e.target;

    this.setState({
      value,
      error: ''
    });

    return this.props.onChange(id, value);
  }

  onBlur = (e) => {
    const { id, locked } = this.props;
    const { value } = e.target;

    if (!locked) {
      this.setState({ focussed: false })
    }
    
    return this.props.onBlur(id, value)
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword
    }));
  }

  renderShowPassword() {
    const { showPassword } = this.state;
    
    if (!showPassword) {
      return (
        <button type="button" onClick={this.toggleShowPassword}>
          <FiEye className="c--grey-05"/>
        </button>
      );
    }

    return (
      <button type="button" onClick={this.toggleShowPassword}>
        <FiEyeOff className="c--grey-05" />
      </button>
    );
  }

  render() {
    const { focussed, value, error, showPassword } = this.state;
    const { id, type, locked, className, label } = this.props;

    const wrapperClassName = `${className} ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;

    return (
      <Wrapper className={wrapperClassName}>
        <Field
          name={id}
          id={id}
          type={showPassword ? 'text' : type}
          value={value}
          placeholder={label} 
          onChange={this.onChange}
          onFocus={() => !locked && this.setState({ focussed: true })}
          onBlur={this.onBlur}
        />
        <Label htmlForm={id} className={error && 'error'}>
          {error || label}
        </Label>
        { type === 'password' && (
          <>{this.renderShowPassword()}</>
        ) }
      </Wrapper>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  locked: false,
  focussed: false,
  value: '',
  error: '',
  label: '',
  onChange: () => '',
  onBlur: () => '',
  className: '',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  focussed: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};

export { Input };
