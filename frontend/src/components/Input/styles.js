import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid var(--color-grey-04);
  border-radius: 4px;
  position: relative;
  transition: all .3s ease;

  &:hover {
    border-color: var(--color-blue-04);
  }

  &.focussed input {
    padding: 24px 16px 8px 16px;
    border-color: var(--color-blue-04);

    & + label {
      top: 4px;
      opacity: 1;
      color: var(--color-blue-04);
    }
  }

  &.locked {
    pointer-events: none;
  }
`;

const Field = styled.input`
  color: var(--color-grey-09);
  position: relative;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  font: inherit;
  background-color: transparent;
  outline: none;
  width: 100%;
  height: 56px;
  transition: padding .1s ease-in-out;
  -webkit-appearance: none;

  & ~ button {
    position: absolute;
    top: 19px;
    right: 18px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 24px;
  left: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  color: var(--color-grey-05);
  opacity: 0;
  pointer-events: none;
  transition: all .1s ease-in-out;

  &.error {
    color: var(--color-red-03);
  }
`;

export { Wrapper, Field, Label };
