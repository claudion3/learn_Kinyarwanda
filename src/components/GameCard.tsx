import React from 'react';
import { Game } from '../types/gameTypes';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      className={`w-full h-48 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${game.bgColor}`}
      onClick={onClick}
    >
      <div className="h-full flex flex-col items-center justify-center p-4 text-white">
        <span className="text-5xl mb-3 drop-shadow-md">{game.icon}</span>
        <h3 className="text-xl font-bold text-center drop-shadow-md">{game.title}</h3>
        <p className="text-sm text-center mt-2 text-white/90 drop-shadow-md">{game.description}</p>
      </div>
    </div>
  );
};

export default GameCard;