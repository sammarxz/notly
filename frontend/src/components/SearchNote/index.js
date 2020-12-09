import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';

import { SearchWrapper, SearchInput, SearchIcon } from './styles';

const SearchNote = ({className, onSearchNote, fetchNotes}) => {
  const [query, setQuery] = useState('');

  const checkIsSubmited = (e) => {
    if (e.key === 'Enter') {
      onSearchNote(query);

      if (query.length === 0) {
        fetchNotes();
      }
    }
  }

  return (
    <SearchWrapper>
      <SearchInput
        className={className}
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={checkIsSubmited}
      />
      <SearchIcon>
        <RiSearch2Line size="18px" className="c--grey-04" />
      </SearchIcon>
    </SearchWrapper>
  );
}

SearchNote.defaultProps = {
  className: '',
  onSearchNote: (query) => console.log(`search for ${query}`)
};

SearchNote.propTypes = {
  className: PropTypes.string,
  onSearchNote: PropTypes.func,
  fetchNotes: PropTypes.func.isRequired
};

export { SearchNote };