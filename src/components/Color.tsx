import React from 'react';
import styled from 'styled-components';

import { TColor } from '../utils/generateRandomColor';

const Container = styled.div<{ backgroundColor: string; height: number; }>`
  background-color: ${props => props.backgroundColor};
  position: relative;
  height: ${props => props.height}px;
  width: 100%;
  
  &:hover {
    &>span {
      opacity: 1;
    }
  }
`;

const Label = styled.span`
  transition: .2s all;
  color: #fff;
  background-color: rgba(0,0,0,.1);
  border-radius: 0 4px 0 0;
  padding: 2px 4px;
  position: absolute;
  bottom: 0;
  opacity: 0;
`

type Props = TColor & {
  height?: number;
}

const Color: React.FC<Props> = ({ r, g, b, height = 150 }) => {
  const color = `rgb(${r},${g},${b})`;

  return (
    <Container
      backgroundColor={color}
      height={height}
    >
      <Label>{color}</Label>
    </Container>
  );
}

export default Color;
