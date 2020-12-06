import styled from 'styled-components';
import { shadeColor } from '../../utils';

const hoverColor = (colorName, percentage) => {
  const colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--color-${colorName}`);
  const hoverColor = shadeColor(colorValue, percentage);
  return hoverColor;
}

const Btn = styled.button`
  color: var(--color-${props => props.textColor});
  background-color: var(--color-${props => props.color});
  border-radius: 4px;
  font-weight: 700;
  transition: background-color .3s ease, transform .3s ease;

  &:not(.like-link):hover {
    background-color: ${props => hoverColor(props.color, -13)}; 
    transform: scale(1.01);
  }

  &:not(.like-link):active {
    background-color: ${props => hoverColor(props.color, -20)}; 
    color: #fff;
    transform: scale(.98);
  }

  &.is--small {
    height: 26px;
    padding: 0 8px;
  }
  
  &.is--medium {
    height: 36px;
    padding: 0 16px;
  }

  &.is--big {
    height: 56px;
    padding: 0 32px;
  }

  &.like-link {
    padding: 0;
    transition: color .3s ease;

    &:hover {
      color: ${props => hoverColor(props.textColor, -13)};
    }
  }
`;

export { Btn };
