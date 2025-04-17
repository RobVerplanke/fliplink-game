import React from 'react';
import CreateCard from '../components/Card';
import { GameBoardProps } from '../types/dataTypes';

export function GameBoard({ values }: GameBoardProps) {
  return (
    <div className="grid__gameboards-container__gameboard">
      {values.map((value, index) => (
        <CreateCard key={index} value={value} />
      ))}
    </div>
  );
}
