import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeButton(){
  return (
    <Link to="/" className="home-button" aria-label="home-button">🏠</Link>
  );
}
