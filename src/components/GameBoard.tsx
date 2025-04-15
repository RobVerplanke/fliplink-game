import React from 'react';
import CreateCard from '../components/Card';
import { GameBoardProps } from '../types/dataTypes.ts';

export function GameBoard({ values }: GameBoardProps) {
  return (
    <div>
      {values.map((value, index) => (
        <CreateCard key={index} value={value} />
      ))}
    </div>
  );
}
