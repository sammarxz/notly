import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { getUser } from '../../services/auth';
import UsersService from '../../services/users';
import NotesServices from '../../services/notes';

import { Container, NotesWrapper, TextEditorWrapper } from './styles';

import { 
  Nav,
  SearchNote,
  Notes as N,
  TextEditor,
} from '../../components';

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
    } else {
      this.setState({
        notes: []
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

  createNote = async () => {
    await NotesServices.create();
    this.fetchNotes();
  }

  deleteNote = async () => {
    const { currentNote } = this.state;
    await NotesServices.delete(currentNote._id);
    this.fetchNotes();
    /*
      TODO
      wait 5 seconds before deleting the fact note and 
      showing the message to the user to undo the action.
    */
  }

  updateNote = async (oldNote, params) => {
    const { notes } = this.state;

    const updatedNote = await NotesServices.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;

    newNotes[index] = updatedNote.data;
    this.setState({
      notes: newNotes,
      currentNote: updatedNote.data
    });
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
          <N notes={notes} currentNote={currentNote} onSelectNote={this.selectNote} />
        </NotesWrapper>
        <TextEditorWrapper>
          <TextEditor note={currentNote} onUpdateNote={this.updateNote} />
        </TextEditorWrapper>
      </Container>
    )
  }
}

export default Notes;