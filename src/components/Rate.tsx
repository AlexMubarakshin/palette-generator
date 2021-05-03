import React from 'react';
import styled from 'styled-components';

import Star from './Star';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: 50px;
  grid-gap: 8px;
  justify-content: center;

  margin: 32px 16px;
`

const staticStarArr = Array.from(Array(5));

type Props = {
  onRateClick: (rate: number) => void;
}

const Rate: React.FC<Props> = ({ onRateClick }) => {
  const [hoveredRate, setHoveredRate] = React.useState<number | null>(null);

  const onMouseEnter = (rate: number) => setHoveredRate(rate);
  const onMouseLeave = () => setHoveredRate(null);

  return (
    <Container>
      {
        staticStarArr.map((_, index) => (
          <Star
            key={index}
            rate={index}
            hovered={!!hoveredRate && hoveredRate >= index}
            onClick={onRateClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ))
      }
    </Container>
  );
}

export default Rate;