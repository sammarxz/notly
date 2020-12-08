import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

import { getUser } from '../../services/auth';
import UsersService from '../../services/users';
import NotesServices from '../../services/notes';

import { Container, NotesWrapper, TextEditorWrapper, DeleteNoteWrapper } from './styles';

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
      },
      showNotes: false,
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
      currentNote: note,
      showNotes: false
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

  toggleShowNotes = () => {
    this.setState((prevState)=> ({
      showNotes: !prevState.showNotes
    }));
  }

  render() {
    const { user, logout, notes, currentNote, showNotes } = this.state;

    if (logout) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Container>
        <Nav 
          user={user} 
          onLogout={this.logOut} onCreateNote={this.createNote} 
          onShowNotes={this.toggleShowNotes}
        />
        <NotesWrapper className={showNotes && 'active'}>
          <SearchNote className="mb--32" />
          <N 
            notes={notes} 
            currentNote={currentNote} 
            onSelectNote={this.selectNote}
          />
        </NotesWrapper>
        <TextEditorWrapper className="p--relative">
          <TextEditor note={currentNote} onUpdateNote={this.updateNote} />
          <DeleteNoteWrapper className="p--absolute">
            <button onClick={this.deleteNote}>
              <RiDeleteBinLine size="22px" className="c--red" />
            </button>
          </DeleteNoteWrapper>
        </TextEditorWrapper>
      </Container>
    )
  }
}

export default Notes;