import React from 'react';
import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';

import { SearchWrapper, SearchInput, SearchIcon } from './styles';

const SearchNote = ({className}) => (
  <SearchWrapper>
    <SearchInput
      className={className}
      type="search"
      placeholder="Search notes..." 
    />
    <SearchIcon>
      <RiSearch2Line size="18px" className="c--grey-04" />
    </SearchIcon>
  </SearchWrapper>
);

SearchNote.defaultProps = {
  className: ''
};

SearchNote.propTypes = {
  className: PropTypes.string
};

export { SearchNote };