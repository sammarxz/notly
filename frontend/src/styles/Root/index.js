import { css } from 'styled-components';

const Root = css`
  :root {
    --font-size-base: 16px;
    --font-family-primary: 'Inter', serif;
    --font-line-height-base: 1.5;

    --color-blue-01: #f1f7fe;
    --color-blue-02: #e2f0ff;
    --color-blue-03: #3879fa;
    --color-blue-04: #316fea;
    --color-blue-06: #2064ca;

    --color-black-08: rgba(0,0,0,0.88);
    --color-black-07: rgba(0,0,0,0.66);
    --color-black-06: rgba(0,0,0,0.45);
    --color-black-05: rgba(0,0,0,0.24);
    --color-black-04: rgba(0,0,0,0.14);
    --color-black-03: rgba(0,0,0,0.08);
    --color-black-02: rgba(0,0,0,0.05);
    --color-black-01: rgba(0,0,0,0.02);

    --color-grey-01: #fafafa;
    --color-grey-02: #f2f2f2;
    --color-grey-03: #ebebeb;
    --color-grey-04: #dedede;
    --color-grey-05: #c2c2c2;
    --color-grey-06: #999;
    --color-grey-07: #575757;
    --color-grey-08: #1f1f1f;

    --color-red: #d1453b;

    --color-green: #058527;

    --color-base-white: #fff;
    --color-base-black: #000;
  }

  body {
    color: var(--color-grey-08);
  }
`;

export default Root;
