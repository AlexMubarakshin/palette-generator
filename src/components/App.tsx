import React from 'react';
import styled from 'styled-components';
import { useMachineLearning } from '../hooks/useMachineLearning';

import { useStorage } from '../hooks/useStorage';

import { generateRandomPalette, TPalette } from '../utils/generateRandomPalette';

import Palette from './Palette';
import Predicts from './Predicts';
import Rate from './Rate';

const Container = styled.div`
  padding: 64px;
  margin: 0 auto;
  max-width: 800px;
`;

const App: React.FC = () => {
  const [palette, setPalette] = React.useState<TPalette>([]);

  const { data, loadData, saveData } = useStorage();
  const { topResults } = useMachineLearning(data);

  React.useEffect(() => {
    loadData()
    setPalette(generateRandomPalette())
  }, []); // eslint-disable-line

  const onRateClick = (rate: number) => {
    saveData(palette, rate);

    setPalette(generateRandomPalette())
  }

  return (
    <Container>
      <Palette palette={palette} />
      <Rate onRateClick={onRateClick} />

      <Predicts predicts={topResults} />
    </Container>
  )
}

export default App;
