import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

import { getUser } from '../../services/auth';
import UsersService from '../../services/users';
import NotesServices from '../../services/notes';

import { Alert } from '../../components';

import { 
  Container, 
  NotesWrapper, 
  TextEditorWrapper, 
  DeleteNoteWrapper 
} from './styles';

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
      alert: false,
      deletedNote: {},
      timer: null
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
    this.setState({
      showNotes: false
    });
  }

  deleteNote = async () => {
    const { notes, currentNote } = this.state;
    const index = notes.indexOf(currentNote);

    this.setState((prevState) => ({
      notes: prevState.notes.filter( note => note._id !== currentNote._id),
      deletedNote: currentNote,
      currentNote: prevState.notes[index + 1],
      alert: {
        message: 'Note successfully deleted'
      },
      timer: setTimeout(async () => {
        this.setState({
          alert: false,
        });
        await NotesServices.delete(currentNote._id);
        this.fetchNotes();
      }, 3000)
    }));
  }

  undoDelete = () => {
    const { deletedNote, timer } = this.state;

    this.setState((prevState) => ({
      notes: prevState.notes.concat(deletedNote),
      alert: false,
      deletedNote: {},
      timer: clearTimeout(timer)
    }));
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
    const { 
      user, logout, notes, currentNote, showNotes, alert
    } = this.state;

    if (logout) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Container>
        {alert && (
          <Alert onUndoDelete={this.undoDelete}>
            {alert.message}
          </Alert>
        )}
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
        {notes.length >= 1 && (
          <TextEditorWrapper className="p--relative">
            <TextEditor note={currentNote} onUpdateNote={this.updateNote} />
            <DeleteNoteWrapper className="p--absolute">
              <button onClick={this.deleteNote}>
                <RiDeleteBinLine size="22px" className="c--red" />
              </button>
            </DeleteNoteWrapper>
          </TextEditorWrapper>
        )}
      </Container>
    )
  }
}

export default Notes;