import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState('start');

  function handleResetGame() {
    setGameState('start');
  }

  function handleStartGame() {
    setGameState('playing');
  }

  function handleEndGame() {
    setGameState('end');
  }

  return (
    <>
      {gameState === 'start' && <StartScreen onClick={handleStartGame} />}
      {gameState === 'playing' && <GameScreen onGameEnd={handleEndGame} />}
      {gameState === 'end' && <Endscreen onGameReset={handleResetGame} />}
    </>
  );
}

export default App;
