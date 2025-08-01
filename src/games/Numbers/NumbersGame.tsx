import React, { useState } from 'react';
import useSound from '../../hooks/useSound';
import GameWrapper from '../../components/GameWrapper';

interface NumberItem {
  id: string;
  //number: number;
  nameKinyarwanda: string;
  sound: string;
  emoji: string;
  fallbackText: string;
}

const NumbersGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const numbers: NumberItem[] = [
    { id: '0', nameKinyarwanda: 'Zeru', sound: '/sounds/numbers/zeru.mp3', emoji: '0️⃣', fallbackText: "Zeru" },
    { id: '1', nameKinyarwanda: 'Rimwe', sound: '/sounds/numbers/rimwe.mp3', emoji: '1️⃣', fallbackText: "Rimwe" },
    { id: '2', nameKinyarwanda: 'Kabiri', sound: '/sounds/numbers/kabiri.mp3', emoji: '2️⃣', fallbackText: "Kabiri" },
    { id: '3', nameKinyarwanda: 'Gatatu', sound: '/sounds/numbers/gatatu.mp3', emoji: '3️⃣', fallbackText: "Gatatu" },
    { id: '4', nameKinyarwanda: 'Kane', sound: '/sounds/numbers/kane.mp3', emoji: '4️⃣', fallbackText: "Kane" },
    { id: '5', nameKinyarwanda: 'Gatanu', sound: '/sounds/numbers/gatanu.mp3', emoji: '5️⃣', fallbackText: "Gatanu" },
  ];

  const [currentNumber, setCurrentNumber] = useState<NumberItem | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const { play: playSound } = useSound(
    currentNumber?.sound || '',
    currentNumber?.fallbackText
  );

  const handleNumberClick = async (number: NumberItem) => {
    setCurrentNumber(number);
    setShowAnswer(false);
    try {
      await playSound();
    } catch (error) {
      console.error('Sound playback error:', error);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    if (!showAnswer && currentNumber) {
      playSound().catch(console.error);
    }
  };

  return (
    <GameWrapper onBack={onBack} title="Imibare mu Kinyarwanda">
      <div className="flex flex-col items-center">
        {currentNumber ? (
          <>
            <div className="text-8xl my-6">{currentNumber.emoji}</div>
            
            <div className="text-center mb-6">
              <p className="text-2xl font-bold">{currentNumber.number}</p>
              {showAnswer && (
                <p className="text-xl mt-2 text-green-600">{currentNumber.nameKinyarwanda}</p>
              )}
            </div>
            
            <button
              onClick={toggleAnswer}
              className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              {showAnswer ? 'Hisha (Hide)' : 'Erekana (Show)'}
            </button>
            
            <button
              onClick={() => playSound().catch(console.error)}
              className="mb-6 px-6 py-2 bg-blue-100 rounded-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Vuza nanone (Repeat)
            </button>
          </>
        ) : (
          <p className="text-lg mb-6">Hitamo umubare wo kwiga</p>
        )}

        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {numbers.map((number) => (
            <button
              key={number.id}
              onClick={() => handleNumberClick(number)}
              className={`p-4 rounded-lg text-xl font-bold flex flex-col items-center justify-center transition-all
                ${currentNumber?.id === number.id 
                  ? 'bg-blue-100 scale-105 ring-2 ring-blue-300' 
                  : 'bg-white hover:bg-gray-50 shadow-md'}`}
            >
              <span>{number.emoji}</span>
              <span className="text-sm mt-1">{number.number}</span>
            </button>
          ))}
        </div>
      </div>
    </GameWrapper>
  );
};

export default NumbersGame;