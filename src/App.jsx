import { EndScreen } from './pages/EndScreen';
import { GameScreen } from './pages/GameScreen';
import { StartScreen } from './pages/StartScreen';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState('playing');

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
      {gameState === 'end' && <EndScreen onClick={handleResetGame} />}
    </>
  );
}

export default App;
