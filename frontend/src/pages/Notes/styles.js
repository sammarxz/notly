import styled from 'styled-components';

const Container = styled.main`
  padding: 0 5%;
  max-width: 1480px;
  margin: 0 auto;
`;

const NotesWrapper = styled.div`
  margin-left: 60px;
  margin-top: 20px;

  @media (min-width: 676px) {
    margin-left: 90px;
    margin-top: 40px;
    max-width: 300px;
  }
`;

export { Container, NotesWrapper };