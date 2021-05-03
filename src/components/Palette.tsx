import React from 'react';
import styled from 'styled-components';

import { TPalette } from '../utils/generateRandomPalette';

import Color from './Color';

const Root = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
`;

const Container = styled.div<{ length: number }>`
  display: grid;
  grid-template-rows: repeat(${props => props.length}, 1fr);
`;

type Props = {
  palette: TPalette;
  height?: number;
}

const Palette: React.FC<Props> = ({ palette, height }) => {
  const colorHeight = height || 350 / palette.length;

  return (
    <Root>
      <Container length={palette.length}>
        {
          palette.map((item, index) => (
            <Color
              key={index}
              r={item.r}
              g={item.g}
              b={item.b}
              height={colorHeight}
            />
          ))
        }
      </Container>
    </Root>
  )
}

export default Palette;
