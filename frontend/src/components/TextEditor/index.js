import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Wrapper } from './styles';

const TextEditor = ({note, onUpdateNote}) => { 
  const [currentContent, setCurrentContent] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setCurrentContent(note.body);
  }, [note]);

  const modules = {
    toolbar: [
      [
        { 'header': '1' }, { 'header': '2' },
      ],
      ['bold', 'italic', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean'],
    ]
  }

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/ig, '').slice(0, 30);
    onUpdateNote(note, {
      title,
      body: content
    });
  }

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);

    if (source === 'user') {
      setCurrentContent(content);
      setTimer(setTimeout(() => {
        updateNote(content)
      }, 2000));
    }
  }

  return (
    <Wrapper>
      <ReactQuill 
        value={currentContent} 
        modules={modules}
        onChange={handleChange}
      />
    </Wrapper>
  )
};

TextEditor.propTypes = {
  note: PropTypes.object.isRequired,
  onUpdateNote: PropTypes.func.isRequired
};

export { TextEditor }