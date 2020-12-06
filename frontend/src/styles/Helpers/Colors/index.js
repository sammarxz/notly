import { css } from 'styled-components';
import { getAllCSSColors } from '../../../utils';

const varColors = getAllCSSColors();

const Colors = css`
  ${varColors.map((color) => css`
    .bg--${color.split("-").splice(3).join('-')} {
      background-color: var(${color});
    }
    
    .c--${color.split("-").splice(3).join('-')} {
      color: var(${color});
    }
  `)}
`;

export { Colors }