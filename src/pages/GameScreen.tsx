import React, { useState } from 'react';
import { topographyData } from '../data/questions';
import { GameBoard } from '../components/GameBoard';

export function GameScreen() {
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
    <section>
      <p>GameScreen Page</p>
      <div>
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
