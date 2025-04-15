import { EndScreen } from './pages/EndScreen';
import { GameScreen } from './pages/GameScreen';
import { StartScreen } from './pages/StartScreen';
import { useState } from 'react';

function App() {
  const [gameState, setGameState] = useState('playing');

  // User choose to reset the game
  function handleResetGame() {
    setGameState('start');
  }

  // User has started the game
  function handleStartGame() {
    setGameState('playing');
  }

  // The game has ended
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
