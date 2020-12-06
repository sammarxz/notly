import  React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { 
  Container, 
  Header, 
  Hero,
  Intro,
  Forms,
  PreviewImage,
  Features,
  Feature,
  CallToAction,
  Divider,
  Footer
} from './styles';

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
              key={key}
              id={key}
              label={capitalizeFirstLetter(key)}
              type={key === 'name' ? 'text' : key}
              className="mb--16"
              value={field[key]}
              onChange={(id, value) => this.handleChange(id, value, 'register') }
            />
        )})}
        <div className="d--flex ai--center jc--space-between">
          <p className="m--0 c--grey-07">
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
              key={key}
              id={key}
              label={capitalizeFirstLetter(key)}
              type={key === 'name' ? 'text' : key}
              className="mb--16"
              value={field[key]}
              onChange={(id, value) => this.handleChange(id, value, 'login') }
            />
        )})}
        <div className="d--flex ai--center jc--space-between">
          <p className="m--0 c--grey-07">
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

  goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { formChoice } = this.state;

    return (
      <>
        <Container>
          <Header id="form" className="mb--48">
            <Link to="/" className="mb--24">
              <img src={Logo} alt="Logo anoite.co" />
            </Link>
            <Hero>
              <Intro>
                <h1>Super simple note taking for your thoughts.</h1>
                <p className="mt--16 c--grey-07">Take everyday notes the simple way, without distractions.</p>
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
          <PreviewImage src="https://via.placeholder.com/1180x700/3879fa/fff" alt="placeholder" />
        </Container>
        <section className="mt--48">
          <Container>
            <Features>
                <Feature>
                  <h1 className="mb--16">Focus on write</h1>
                  <p className="c--grey-07">Focus is the key to good writing. <strong>Notly</strong> helps you stay on flow.</p>
                </Feature>
                <Feature>
                  <h1 className="mb--16">Simple, but essential</h1>
                  <p className="c--grey-07"><strong>Notly</strong> have a simple text editor, only the essential tools.</p>
                </Feature>
                <Feature>
                  <h1 className="mb--16">Notes Everywhere</h1>
                  <p className="c--grey-07">Keep your notes close. Notes on your smartphone or PC.</p>
                </Feature>
                <Feature>
                  <h1 className="mb--16">Keep Sync</h1>
                  <p className="c--grey-07">Never lost an note. <strong>Notly</strong> keep your notes saved and secure.</p>
                </Feature>
            </Features>
            <Divider />
            <CallToAction className="ta--center">
              <h2 className="mb--24 fw--400 lh--1-2">Ready to write your notes? Let's get started!</h2>
              <Button size="big" onClick={this.goToTop}>Go Notes!</Button>
            </CallToAction>
          </Container>
        </section>
        <Container size="large">
          <Footer className='ai--center jc--space-between pt--16'>
            <p>notly.co &copy; 2021 - All rights reserved.</p>
            <p>Created by <a href="https://sammarxz.com" className="c--blue-04" target="_blank"rel="noreferrer">@sammarxz</a>.</p>
          </Footer>
        </Container>
      </>
    );
  }
}

export default Home;
