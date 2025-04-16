import React, { useState } from 'react';
import { topographyData } from '../data/questions';
import { GameBoard } from '../components/GameBoard';
import backgroundImage from '../assets/images/game-background.jpg';

// Set background image
const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100vw',
  minHeight: '100vh',
};

export function GameScreen(onGameEnd) {
  // Get all questions from dataset
  const [questions] = useState(
    topographyData.map((data) => {
      return data.question;
    })
  );

  // Get all answers from dataset
  const [answers] = useState(
    topographyData.map((data) => {
      return data.answer;
    })
  );

  return (
    <section style={style}>
      <p>GameScreen Page</p>
      <div className="gameboards-container">
        {/* Create a gameboard for the question cards */}
        <div>
          <GameBoard values={questions} />
        </div>

        {/* Create a gameboard for the answer cards */}
        <div>
          <GameBoard values={answers} />
        </div>
      </div>
    </section>
  );
}
