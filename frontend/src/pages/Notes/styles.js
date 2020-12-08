import styled from 'styled-components';

const Container = styled.main`
  padding: 0 5%;
  max-width: 1480px;
  margin: 0 auto;
`;

const NotesWrapper = styled.div`
  position: fixed;
  margin-left: 60px;
  margin-top: 20px;
  max-height: 100vh;
  top: 0;

  @media (min-width: 676px) {
    margin-left: 90px;
    margin-top: 40px;
    max-width: 300px;
  }
`;

const TextEditorWrapper = styled.div`
  @media (min-width: 676px) {
    flex: 1;
    min-height: 80vh;
    margin-top: 40px;
    margin-left: 430px;
  }
`;

export { Container, NotesWrapper, TextEditorWrapper };