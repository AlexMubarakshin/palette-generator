import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ hovered?: boolean }>`
  cursor: pointer;
  background-color: ${props => props.hovered ? '#e1701a' : '#efc4a4'};
`

type Props = {
  rate: number;
  hovered?: boolean;

  onClick: (rate: number) => void;

  onMouseEnter: (rate: number) => void;
  onMouseLeave: (rate: number) => void;
}

const Star: React.FC<Props> = ({ hovered, rate, onClick, onMouseEnter, onMouseLeave }) => {
  const onClickHandler = () => onClick(rate);
  const onMouseEnterHandler = () => onMouseEnter(rate);
  const onMouseLeaveHandler = () => onMouseLeave(rate);

  return (
    <Container
      hovered={hovered}
      onClick={onClickHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    />
  )
}

export default Star;
