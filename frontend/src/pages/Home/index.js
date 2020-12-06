import  React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { Container, Header, Hero, Intro, Forms } from './styles';

import { Input, Button } from '../../components';

class Home extends Component {
  state = {
    formChoice: 'register',
  }

  renderRegister = () => (
    <form id="register">
      <Input 
        id="name"
        label="Name"
        type="text"
        className='mb--16'
      />
      <Input 
        id="email"
        label="Email"
        type="email"
        className='mb--16'
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        className='mb--16'
      />
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

  renderLogin = () => (
    <form id="login">
      <Input 
        id="email"
        label="Email"
        type="email"
        className='mb--16'
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        className='mb--16'
      />
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
