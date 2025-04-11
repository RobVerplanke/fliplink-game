import React from 'react';
import { topographyData } from '../data/questions';
import CreateCard from '../components/Card';

const questions = topographyData.map((data) => {
  return data.question;
});

export function GameScreen() {
  return (
    <div>
      <p>GamePage component</p>

      {/* Create a card for each question in the list */}
      {questions.map((question) => {
        return <CreateCard value={question} />;
      })}
    </div>
  );
}
