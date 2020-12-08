import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  border: 1px solid var(--color-grey-04);
  border-radius: 4px;
  width: 100%;
  padding: 6px 16px;
  transition: border-color .3s ease;

  &:focus {
    border-color: var(--color-blue-04);

    & ~ div svg {
      color: var(--color-blue-04);
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  transition: fill .3s ease;
`;

export { SearchWrapper, SearchInput, SearchIcon };