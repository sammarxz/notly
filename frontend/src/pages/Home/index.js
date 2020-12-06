import  React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { Container, Header, Hero, Intro, Forms } from './styles';

import { Input, Button } from '../../components';

import { capitalizeFirstLetter } from '../../utils';

class Home extends Component {
  state = {
    formChoice: 'register',
    register: [{
      name: '',
      email: '',
      password: ''
    }],
    login: [{
      email: '',
      password: ''
    }]
  }

  handleChange = (id, value, type) => {
    this.setState((prevState) => ({
      [type]: [{
        ...prevState[type][0], 
        [id]: value
      }]
    }));
  }

  renderRegister = () => {
    const { register } = this.state;

    return (
      <form id="register">
        {register.map(field => {
          return Object.keys(field).map(key => 
            <Input
              id={key}
              label={capitalizeFirstLetter(key)}
              type={key === 'name' ? 'text' : key}
              className="mb--16"
              value={field[key]}
              onChange={(id, value) => this.handleChange(id, value, 'register') }
            />
        )})}
        <div className="d--flex ai--center jc--space-between">
          <p className="m--0">
            Have an account?
            <Button 
              size="small" 
              color="base-white" 
              textColor="blue-04"
              onClick={() => this.setState({ formChoice: 'login' })}
              className="d--block like-link"
            >
              Sign In
            </Button>
          </p>
          <Button type="submit" size="big">
            Register
          </Button>
        </div>
      </form>
    );
  };

  renderLogin = () => {
    const { login } = this.state;

    return (
      <form id="login">
        {login.map(field => {
          return Object.keys(field).map(key => 
            <Input
              id={key}
              label={capitalizeFirstLetter(key)}
              type={key === 'name' ? 'text' : key}
              className="mb--16"
              value={field[key]}
              onChange={(id, value) => this.handleChange(id, value, 'login') }
            />
        )})}
        <div className="d--flex ai--center jc--space-between">
          <p className="m--0">
            Don't have an account?
            <Button 
              size="small" 
              color="base-white" 
              textColor="blue-04"
              onClick={() => this.setState({ formChoice: 'register' })}
              className="d--block like-link"
            >
              Sign Up
            </Button>
          </p>
          <Button type="submit" size="big">
            Log in
          </Button>
        </div>
      </form>
    );
  };

  render() {
    const { formChoice } = this.state;

    return (
      <>
        <Container>
          <Header className="mb--48">
            <Link to="/" className="mb--24">
              <img src={Logo} alt="Logo anoite.co" />
            </Link>
            <Hero>
              <Intro>
                <h1>Super simple note taking for your thoughts.</h1>
                <p className="mt--16">Take everyday notes the simple way, without distractions.</p>
              </Intro>
              <Forms>
                {formChoice === 'register' ? (
                  <>{this.renderRegister()}</>
                ) : (
                  <>{this.renderLogin()}</>
                )}
              </Forms>
            </Hero>
          </Header>
        </Container>
        <Container size="large">
          <img src="https://via.placeholder.com/1180x700/E7F3FE" className="mb--48"/>
        </Container>
        <section className="mt--48">
          <Container>
            <h2>Focus on Write</h2>
          </Container>
        </section>
      </>
    );
  }
}

export default Home;
