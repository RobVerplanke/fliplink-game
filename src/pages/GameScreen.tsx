import React, { useState } from 'react';
import { topographyData } from '../data/questions';
import { GameBoard } from '../components/GameBoard';
import backgroundImage from '../assets/images/game-background.jpg';
import Title from '../components/Title';
import Scoreboard from '../components/Scoreboard';
import Timer from '../components/Timer';

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
    <div className="grid" style={style}>
      <section className="grid__title-container">
        <Title />
      </section>

      <section className="grid__scoreboard-container">
        <Scoreboard />
      </section>

      <section className="grid__timer-container">
        <Timer />
      </section>

      <section className="grid__gameboards-container">
        <div>
          <GameBoard values={questions} />
        </div>

        <div>
          <GameBoard values={answers} />
        </div>
      </section>
    </div>
  );
}
