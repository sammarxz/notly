import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { getUser } from '../../services/auth';
import UsersService from '../../services/users';
import NotesServices from '../../services/notes';

import { Container, NotesWrapper } from './styles';

import { Nav, Notes as N, SearchNote } from '../../components';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(getUser()),
      logout: false,
      notes: [],
      currentNote: {
        title: '',
        body: '',
        id: ''
      }
    }
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const response = await NotesServices.index();
    if (response.data.length >= 1) {
      this.setState({
        notes: response.data.reverse(),
        currentNote: response.data[0]
      });
    }
  }

  selectNote = (id) => {
    const { notes } = this.state;
    const note = notes.find((note) => {
      return note._id === id;
    });

    this.setState({
      currentNote: note
    });
  }

  createNote = async() => {
    await NotesServices.create();
    this.fetchNotes();
  } 

  logOut = async () => {
    await UsersService.logout();
    this.setState({
      logout: true
    });
  }

  render() {
    const { user, logout, notes, currentNote } = this.state;

    if (logout) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Container>
        <Nav user={user} onLogout={this.logOut} onCreateNote={this.createNote} />
        <NotesWrapper>
          <SearchNote className="mb--32" />
          <N notes={notes} currentNote={currentNote} selectNote={this.selectNote} />
        </NotesWrapper>
      </Container>
    )
  }
}

export default Notes;