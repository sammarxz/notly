import styled from 'styled-components';

const ListNotes = styled.ul`
  a {
    display: block;
    width: 100%;
  }
`;

const Note = styled.li`
  border-radius: 4px;
  transition: background-color .3s ease;

  &:hover {
    background-color: var(--color-grey-02);
  }
`

export { ListNotes, Note };