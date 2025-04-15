import { EndScreen } from './pages/EndScreen';
import { GameScreen } from './pages/GameScreen';
import { StartScreen } from './pages/StartScreen';
import { useState } from 'react';
import backgroundImage from './assets/images/game-background.jpg';
import './scss/app.css';

// Set background image
const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100vw',
  minHeight: '100vh',
};

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
    <div style={style}>
      {gameState === 'start' && <StartScreen onClick={handleStartGame} />}
      {gameState === 'playing' && <GameScreen onGameEnd={handleEndGame} />}
      {gameState === 'end' && <EndScreen onClick={handleResetGame} />}
    </div>
  );
}

export default App;
