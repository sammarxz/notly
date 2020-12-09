import styled from 'styled-components';

const AlertWrapper = styled.div`
  background-color: var(--color-black-08);
  color: #fff;
  position: fixed;
  bottom: 20px
  right: 20px;
  left: 20px;
  min-width: 300px;
  border-radius: 4px;
  z-index: 99;

  @media (min-width: 676px) {
    bottom: 40px;
    right: 50px;
    left: auto;
  }
`;

export { AlertWrapper }