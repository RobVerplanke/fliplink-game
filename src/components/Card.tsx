import React from 'react';
import { CardProps } from '../types/dataTypes';

export default function CreateCard({ value }: CardProps) {
  {
    // Create a card with the given value as its content
    return (
      <div>
        <p>{value}</p>
      </div>
    );
  }
}
