import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { ListNotes, Note } from './styles'; 

const Notes = ({ notes, currentNote, onSelectNote }) => (
  <ListNotes>
    {notes.length > 0 ? (
      <>
        {notes.map((note) => (
          <Note 
            key={note._id} 
            className={`pt--16 pb--16 pl--16 pr--16 ${note === currentNote && 'bg--grey-02'} mb--16`}
            onClick={() => onSelectNote(note._id)}
          >
            <h2 className="fs--medium mb--4">
              {note.title.replace(/(<([^>]+)>)/ig, '').substring(0, 15)}...
            </h2>
            <div className="d--flex ai--center jc--space-between">
              <p className="m--0 fs--small">
                {note.body.replace(/(<([^>]+)>)/ig, '').substring(0, 18)}...
              </p>
              <p className="m--0 fs--small">
                {Moment(note.created_at).fromNow()}
              </p>
            </div>
          </Note>
        ))}
      </>
    ) : (
      <p className="m--0 ta--center c--grey-06">No notes found :(</p>
    )}
    
  </ListNotes>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentNote: PropTypes.object.isRequired,
  onSelectNote: PropTypes.func.isRequired
};

export { Notes };
