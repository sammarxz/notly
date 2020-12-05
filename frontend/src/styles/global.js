import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Root from './Root'
import Typography from './Typography'

const GlobalStyles = createGlobalStyle`
  /* BASE */
  ${Reset}
  ${Root}
  ${Typography}
`;

export default GlobalStyles;
