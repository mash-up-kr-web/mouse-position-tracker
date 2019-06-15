import React from 'react';
import styled, { keyframes } from 'styled-components';
import useMousePosition from './useMousePoisition';

const pitch = keyframes`
  0% {
    width: 100px;
    height: 100px;
    background-color: #ee5555;
  }
  100% {
    width: 200px;
    height: 200px;
    background-color: #f3fbca;
  }
`

const S = {
  Wrapper: styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border: 5px solid #ee5555;
  `,
  Tracker: styled.div.attrs(({ position }) => ({
    style: {
      top: `${position.y}px`,
      left: `${position.x}px`,
    }
  }))`
    position: absolute;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: gold;
    animation: 1s ${pitch} ease-out infinite alternate;
  `,
};

const App = () => {
  const position = useMousePosition();
  return (
    <S.Wrapper>
      <div>
        <S.Tracker position={position} />
        <div>x: {position.x}</div>
        <div>y: {position.y}</div>
      </div>
    </S.Wrapper>
  );
};

export default App;
