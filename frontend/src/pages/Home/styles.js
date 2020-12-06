import styled, { css } from 'styled-components';

const containerLg = css`
  max-width: 1180px;
`;

const Container = styled.div`
  max-width: 890px;
  margin: 0 auto;
  padding: 0 5%;

  ${props => props.size === 'large' && containerLg}
`;

const Header = styled.div`
  padding-top: 5%;

  @media (min-width: 676px) {
    padding-top: 120px;
  }
`;

const Hero = styled.div`
  @media (min-width: 676px) {
    display: flex;
    flex-direction: row;
    padding: 0 0 40px 0;
  }
`;

const Intro = styled.div`
  h1 {
    font-size: 36px;
    line-height: 1.2;
  }

  p {
    color: var(--color-grey-07);
  }

  @media (min-width: 676px) {
    width: 50%;
    padding: 0 60px 0 0;
    flex-grow: 1;
  } 
`;

const Forms = styled.div`
  @media (min-width: 676px) {
    width: 50%;
    flex-grow: 1;
  }
`;

export { Container, Header, Hero, Intro, Forms };
