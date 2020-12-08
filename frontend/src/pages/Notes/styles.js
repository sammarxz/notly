import styled from 'styled-components';

const Container = styled.main`
  padding: 0 5%;
  max-width: 1480px;
  margin: 0 auto;

  @media (min-width: 676px) {
    display: flex;
  }
`;

const NotesWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  left: 7%;  
  top: 0;
  right: 66px;
  bottom: 0;
  padding: 5% 0;
  transform: translateX(-120%);
  z-index: 9;

  &.active {
    transform: translateX(49px);
  }

  @media (min-width: 676px) {
    position: relative;
    left: auto;
    right: auto;
    padding: 0;
    margin-left: 90px;
    margin-top: 40px;
    max-width: 300px;
    transform: translateX(0);
  }
`;

const TextEditorWrapper = styled.div`
  margin-top: 20px;
  min-height: 93vh;
  margin-left: 60px;

  .quill {
    height: 100%;

    .ql-toolbar.ql-snow,
    .ql-container.ql-snow {
      border-color: var(--color-grey-04);
    }

    .ql-container.ql-snow ,
    .ql-editor {
      min-height: 82vh;
      max-height: 82vh;
    }

    .ql-editor {
      font-family: var(--font-family-primary);
      font-size: 14px;
    }
  }

  @media (min-width: 676px) {
    flex: 1;
    min-height: 80vh;
    margin-top: 40px;

    .quill {
      .ql-container.ql-snow ,
      .ql-editor {
        min-height: 80vh;
        max-height: 80vh;
      }

      .ql-toolbar.ql-snow {
        padding: 6px 16px;
      }

      .ql-editor {
        font-size: 16px;
        padding: 24px;
      }
    }
  }
`;

const DeleteNoteWrapper = styled.div`
  top: 12px;
  right: 12px;

  @media (min-width: 676px) {
    top: 9px;
    right: 18px;
  }
`;

export { Container, NotesWrapper, TextEditorWrapper, DeleteNoteWrapper };