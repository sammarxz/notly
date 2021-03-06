import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Root from './Root';
import Typography from './Typography';

import {
  Colors, Spaces, Flex, Displays, Text, Positions
} from './Helpers';

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
  ${Text}
  ${Positions}
`;

export default GlobalStyles;
