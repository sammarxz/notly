import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { getToken } from '../../services/auth';
import UsersService from '../../services/users';

import { Container } from './styles';

import { Nav } from '../../components';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(getToken()),
      logout: false,
    }
  }

  logOut = async () => {
    await UsersService.logout();
    this.setState({
      logout: true
    });
  }

  render() {
    const { user, logout } = this.state;

    if (logout) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Container>
        <Nav user={user} onLogout={this.logOut}/>
      </Container>
    )
  }
}

export default Notes;