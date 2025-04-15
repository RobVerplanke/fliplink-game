import React from 'react';
import { CardProps } from '../types/dataTypes';

export default function CreateCard({ value }: CardProps) {
  {
    // Create a card with the given value as its content
    return (
      <div className="card">
        <h3>{value}</h3>
      </div>
    );
  }
}
