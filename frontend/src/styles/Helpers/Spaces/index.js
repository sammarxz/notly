import { css } from 'styled-components'

const Spaces = css`
  .m--0 {
    margin: 0;
  }

  .p--0 {
    padding: 0;
  }

  ${[0, 8, 16, 24, 32, 40, 48].map((size) => css`
    ${['top', 'right', 'bottom', 'left'].map((dir) => css`
      .m${dir[0]}--${size}{
        margin-${dir}: ${size}px;
      }
      
      .p${dir[0]}--${size}{
        padding-${dir}: ${size}px;
      }
    `)}
  `)}
`

export { Spaces }
