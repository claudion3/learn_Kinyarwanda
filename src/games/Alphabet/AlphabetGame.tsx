import React, { useState } from 'react';
import useSound from '../../hooks/useSound';
import GameWrapper from '../../components/GameWrapper';

interface Letter {
  id: string;
  letter: string;
  nameKinyarwanda: string;
  exampleWord: string;
  exampleWordTranslation: string;
  sound: string;
  fallbackText: string;
}

const AlphabetGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const letters: Letter[] = [
    {
      id: '1',
      letter: 'A',
      nameKinyarwanda: 'A',
      exampleWord: 'Amata',
      exampleWordTranslation: 'Milk',
      sound: '/sounds/alphabet/a.mp3',
      fallbackText: "A"
    },
    {
      id: '2',
      letter: 'B',
      nameKinyarwanda: 'B',
      exampleWord: 'Bara',
      exampleWordTranslation: 'Count',
      sound: '/sounds/alphabet/b.mp3',
      fallbackText: "B"
    },
    {
      id: '3',
      letter: 'C',
      nameKinyarwanda: 'C',
      exampleWord: 'Ceceka',
      exampleWordTranslation: 'Be quiet',
      sound: '/sounds/alphabet/c.mp3',
      fallbackText: "C"
    },
  ];

  const [currentLetter, setCurrentLetter] = useState<Letter | null>(null);
  const { play: playSound } = useSound(
    currentLetter?.sound || '',
    currentLetter?.fallbackText
  );

  const handleLetterClick = async (letter: Letter) => {
    setCurrentLetter(letter);
    try {
      await playSound();
    } catch (error) {
      console.error('Sound playback error:', error);
    }
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    setCurrentLetter(letters[randomIndex]);
  };

  return (
    <GameWrapper onBack={onBack} title="Inyuguti z'Ikinyarwanda">
      <div className="flex flex-col items-center">
        {currentLetter ? (
          <>
            <div className="text-8xl my-6 font-bold text-blue-600">{currentLetter.letter}</div>
            <div className="text-center mb-6">
              <p className="text-xl font-semibold">Izina: <span className="text-green-600">{currentLetter.nameKinyarwanda}</span></p>
              <p className="mt-4">Urugero: <span className="font-medium">{currentLetter.exampleWord}</span></p>
              <p className="text-gray-600">({currentLetter.exampleWordTranslation})</p>
            </div>
            
            <button
              onClick={() => playSound().catch(console.error)}
              className="mb-8 px-6 py-2 bg-blue-100 rounded-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Vuza nanone (Repeat)
            </button>
          </>
        ) : (
          <p className="text-lg mb-6">Hitamo inyuguti yo kwiga</p>
        )}

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 w-full">
          {letters.map((letter) => (
            <button
              key={letter.id}
              onClick={() => handleLetterClick(letter)}
              className={`p-4 rounded-lg text-2xl font-bold flex items-center justify-center transition-all
                ${currentLetter?.id === letter.id 
                  ? 'bg-blue-100 scale-105 ring-2 ring-blue-300' 
                  : 'bg-white hover:bg-gray-50 shadow-md'}`}
            >
              {letter.letter}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-8 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Inyuguti ikurikira (Next Letter)
        </button>
      </div>
    </GameWrapper>
  );
};

export default AlphabetGame;