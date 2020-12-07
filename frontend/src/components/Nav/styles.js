import styled from 'styled-components';

const Navbar = styled.nav`
  padding: 20px 0;
  position: fixed;
  top: 0;
  bottom: 0;

  @media (min-width: 676px) {
    padding: 40px 0;
  }
`;

const Avatar = styled.div`
  img {
    border-radius: 50%;
  }
`;

export { Navbar, Avatar };