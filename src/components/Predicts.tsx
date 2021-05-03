import React from 'react';
import styled from 'styled-components';

import { TPaletteWithPredictScore } from '../utils/predicts';
import Palette from './Palette';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 16px;
`;

type Props = {
  predicts: TPaletteWithPredictScore[];
}

const Predicts: React.FC<Props> = ({ predicts }) => {
  return (
    <Container>
      {
        predicts.map((predict, index) => (
          <Palette
            key={`${predict.score}_${index}`}
            palette={predict.palette}
            height={250 / 5}
          />
        ))
      }
    </Container>
  )
}

export default Predicts;
