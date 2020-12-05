import { css } from 'styled-components';

const Typography = css`
 html {
  font-size: var(--font-size-base);
 }

 body {
  font-family: var(--font-family-primary);
  line-height: var(--font-line-height-base);
 }

 p {
  margin-bottom: 1.15rem;
  font-size: 1em;
 }

 h1, h2, h3, h4 {
  font-weight: 500;
 }

 h1 {
  font-size: 1.5em;
 }

 h2 {
  font-size: 1.44em;
 }

 h3 {
  font-size: 1.2em;
 }

 h4 {
  font-size: 1em;
 }

 @media (min-width: 576px) {
  h1 {
    font-size: 2.074em;
  }

  h2 {
    font-size: 1.728em;
  }

  h3 {
    font-size: 1.44em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    margin: 1.25em 0 0.5em;
  }
 }
`;

export default Typography;
