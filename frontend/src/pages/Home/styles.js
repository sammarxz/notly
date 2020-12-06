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
    padding-top: 100px;
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

  @media (min-width: 676px) {
    width: 50%;
    padding: 0 60px 0 0;
    flex-grow: 1;
  } 
`;

const Forms = styled.div`
  form {
    opacity: 0;
  }

  @media (min-width: 676px) {
    width: 50%;
    flex-grow: 1;
  }
`;

const PreviewImage = styled.img`
  border-radius: 10px;

  @media (min-width: 676px) {
    border-radius: 20px;
    margin-bottom: 88px;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-gap: 20px;

  @media (min-width: 676px) {
    grid-gap: 40px;
    margin-bottom: 48px;
  }
`;

const Feature = styled.article`
  h1 {
    font-size: 24px;
  }
`;

const Divider = styled.div`
  width: 176px;
  margin: 0 auto;
  background: #FFFFFF;
  position: relative;
  height: 16px;
  z-index: 1;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
  }

  &:before {
    height: 12px;
    top: 110%;
    background: linear-gradient(-135deg, #ccc 8px, transparent 0) 0 8px,linear-gradient(135deg, #ccc 8px, transparent 0) 0 8px;
    background-position: top left;
    background-repeat: repeat-x;
    background-size: 16px 16px;
  }

  &:after {
    height: 16px;
    top: 100%;
    background: linear-gradient(-135deg, #fff 8px, transparent 0) 0 8px,linear-gradient(135deg, #fff 8px, transparent 0) 0 8px;
    background-position: top left;
    background-repeat: repeat-x;
    background-size: 16px 16px;
  }
`;

const CallToAction = styled.div`
  margin-top: 26px;
  padding-top: 54px;
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 42px;

  @media(min-width: 676px) {
    padding-top: 88px;
    padding-bottom: 88px;
  }

  h2 {
    font-size: 28px;

    @media(min-width: 676px) {
      font-size: 36px;
    }
  }
`;


const Footer = styled.footer`
  border-top: 1px solid var(--color-grey-03);
  text-align: center;

  @media(min-width: 676px) {
    display: flex;
    text-align: left;
  }
`;

export { 
  Container, 
  Header, 
  Hero, 
  Intro, 
  Forms,
  PreviewImage,
  Features,
  Feature,
  CallToAction,
  Divider,
  Footer
};
