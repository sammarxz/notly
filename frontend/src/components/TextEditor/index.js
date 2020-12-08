import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Wrapper } from './styles';

const TextEditor = ({note}) => { 
  const [currentContent, setCurrentContent] = useState('');

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

  return (
    <Wrapper>
      <ReactQuill value={currentContent} modules={modules} />
    </Wrapper>
  )
};

TextEditor.propTypes = {
  note: PropTypes.object.isRequired
};

export { TextEditor }