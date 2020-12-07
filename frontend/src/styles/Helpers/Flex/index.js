import { css } from 'styled-components';

const Flex = css`
  .d--flex {
    display: flex;
  }
  
  .ai--center {
    align-items: center;
  }

  .ai--start {
    align-items: flex-start;
  }

  .jc--space-between {
    justify-content: space-between;
  }

  .fw--wrap {
    flex-wrap: flex-wrap;
  }

  .fd--column {
    flex-direction: column;
  }

  .fd--row {
    flex-direction: row;
  }
`;

export { Flex };
