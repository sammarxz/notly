import { css } from 'styled-components';
import { getAllCSSColors } from '../../../utils';

const colorsBackup = [
  "--color-blue-01",
  "--color-blue-02",
  "--color-blue-03",
  "--color-blue-04",
  "--color-blue-06",
  "--color-black-08",
  "--color-black-07",
  "--color-black-06",
  "--color-black-05",
  "--color-black-04",
  "--color-black-03",
  "--color-black-02",
  "--color-black-01",
  "--color-grey-01",
  "--color-grey-02",
  "--color-grey-03",
  "--color-grey-04",
  "--color-grey-05",
  "--color-grey-06",
  "--color-grey-07",
  "--color-grey-08",
  "--color-red",
  "--color-green",
  "--color-base-white",
  "--color-base-black"
];

let varColors = getAllCSSColors().lnegth > 0 ? getAllCSSColors() : colorsBackup;

const Colors = css`
  ${varColors.map((color) => css`
    .bg--${color.split('-').splice(3).join('-')} {
      background-color: var(${color});
    }
    
    .c--${color.split('-').splice(3).join('-')} {
      color: var(${color});
    }
  `)}
`;

export { Colors };
