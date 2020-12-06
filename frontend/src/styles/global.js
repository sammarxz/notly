import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Root from './Root'
import Typography from './Typography'

import { Colors, Spaces, Flex, Displays } from './Helpers';

const GlobalStyles = createGlobalStyle`
  /* BASE */
  ${Reset}
  ${Root}
  ${Typography}

  /* HELPERS */
  ${Colors}
  ${Spaces}
  ${Flex}
  ${Displays}
`;

export default GlobalStyles;
