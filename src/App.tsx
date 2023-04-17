import React from 'react';
import { useState } from 'react';
import { createStage } from './gameHelpers';
// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';
import Display from './components/Display/Display';
import StartButton from './components/StartButton/StartButton';
import Stage from './components/Stage/Stage';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true)

  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className="display">
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score:`} />
              <Display text={`Rows:`} />
              <Display text={`Level:`} />
            </>
          )}
        </div>
        <Stage stage={createStage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
