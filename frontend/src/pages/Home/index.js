import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

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
  Footer,
} from './styles';

import { Input, Button } from '../../components';

import UsersService from '../../services/users';
import { isAuthenticated } from '../../services/auth';

import { capitalizeFirstLetter } from '../../utils';

import PrevImage from '../../assets/prev.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formChoice: 'register',
      register: [{
        name: '',
        email: '',
        password: '',
      }],
      login: [{
        email: '',
        password: '',
      }],
      error: false,
      redirectToNotes: false,
    };
  }

  handleChange(id, value, type) {
    this.setState((prevState) => ({
      [type]: [{
        ...prevState[type][0],
        [id]: value,
      }],
    }));
  }

  async handleSubmit(e, type) {
    e.preventDefault();
    const dataToPass = this.state[type];

    if (this.isValid(dataToPass[0], type)) {
      try {
        await UsersService[type](...dataToPass);
        if (type === 'register') {
          this.setState({
            formChoice: 'login',
            login: [{
              email: dataToPass[0].email,
              password: dataToPass[0].password
            }],
            register: [{
              name: '',
              email: '',
              password: ''
            }]
          });
          return;
        }

        this.setState({
          redirectToNotes: true,
        });
      } catch (error) {
        this.setState({
          error: {
            message: 'Invalid Email or password',
          },
        });
        return;
      }
    }

    this.setState({
      error: {
        message: 'Please fill in all fields',
      },
    });
  }

  isValid(data, type) {
    let response = false;

    switch (type) {
      case 'register':
        if (data.name && data.email && data.password) {
          response = true;
        }
        break;
      default:
        if (data.email && data.password) {
          response = true;
        }
        break;
    }

    return response;
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  renderLogin() {
    const { login, error } = this.state;

    return (
      <form id="login" onSubmit={(e) => this.handleSubmit(e, 'login')} method="POST">
        {error && (
          <div className="d--flex ai--center jc--space-between mb--16">
            <p className="c--red m--0">{error.message}</p>
            <button type="button" onClick={() => this.setState({ error: false })}>
              <RiCloseLine className="c--red" />
            </button>
          </div>
        )}
        {login.map((field) => Object.keys(field).map((key) => (
          <Input
            key={key}
            id={key}
            label={capitalizeFirstLetter(key)}
            type={key === 'name' ? 'text' : key}
            className="mb--16"
            value={field[key]}
            error={error}
            onChange={(id, value) => this.handleChange(id, value, 'login')}
          />
        )))}
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
  }

  renderRegister() {
    const { register, error } = this.state;

    return (
      <form id="register" onSubmit={(e) => this.handleSubmit(e, 'register')} method="POST">
        {error && (
          <div className="d--flex ai--center jc--space-between mb--16">
            <p className="c--red m--0">{error.message}</p>
            <button type="button" onClick={() => this.setState({ error: false })}>
              <RiCloseLine className="c--red" />
            </button>
          </div>
        )}
        {register.map((field) => Object.keys(field).map((key) => (
          <Input
            key={key}
            id={key}
            label={capitalizeFirstLetter(key)}
            type={key === 'name' ? 'text' : key}
            className="mb--16"
            value={field[key]}
            onChange={(id, value) => this.handleChange(id, value, 'register')}
          />
        )))}
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
  }

  render() {
    const { formChoice, redirectToNotes } = this.state;

    if (redirectToNotes || isAuthenticated()) {
      return <Redirect to="/notes" />;
    }

    return (
      <>
        <Container>
          <Header id="form" className="mb--48">
            <Link to="/" className="mb--24">
              <img src={Logo} alt="Logo Notly.co" />
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
          <PreviewImage src={PrevImage} alt="placeholder" />
        </Container>
        <section className="mt--48">
          <Container>
            <Features>
              <Feature>
                <h1 className="mb--16">Focus on write</h1>
                <p className="c--grey-07">
                  Focus is the key to good writing.
                  <strong>Notly</strong>
                  {' '}
                  helps you stay on flow.
                </p>
              </Feature>
              <Feature>
                <h1 className="mb--16">Simple, but essential</h1>
                <p className="c--grey-07">
                  <strong>Notly</strong>
                  {' '}
                  have a simple text editor, only the essential tools.
                </p>
              </Feature>
              <Feature>
                <h1 className="mb--16">Notes Everywhere</h1>
                <p className="c--grey-07">Keep your notes close. Notes on your smartphone or PC.</p>
              </Feature>
              <Feature>
                <h1 className="mb--16">Keep Sync</h1>
                <p className="c--grey-07">
                  Never lost an note.
                  <strong>Notly</strong>
                  {' '}
                  keep your notes saved and secure.
                </p>
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
          <Footer className="ai--center jc--space-between pt--16">
            <p>notly.co &copy; 2021 - All rights reserved.</p>
            <p>
              Created by
              <a href="https://sammarxz.com" className="c--blue-04" target="_blank" rel="noreferrer">@sammarxz</a>
              .
            </p>
          </Footer>
        </Container>
      </>
    );
  }
}

export default Home;
