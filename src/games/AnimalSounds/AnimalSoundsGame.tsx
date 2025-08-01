import React, { useState } from 'react';
import useSound from '../../hooks/useSound';
import GameWrapper from '../../components/GameWrapper';

interface Animal {
  id: string;
  name: string;
  nameKinyarwanda: string;
  sound: string;
  emoji: string;
  fallbackText: string;
}

const AnimalSoundsGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const animals: Animal[] = [
    { 
      id: '1', 
      name: 'Cow', 
      nameKinyarwanda: 'Inka', 
      sound: '/sounds/animals/inka.mp3', 
      emoji: '🐄',
      fallbackText: "Inka"
    },
    { 
      id: '2', 
      name: 'Dog', 
      nameKinyarwanda: 'Imbwa', 
      sound: '/sounds/animals/imbwa.mp3', 
      emoji: '🐕',
      fallbackText: "Imbwa"
    },
    { 
      id: '3', 
      name: 'Cat', 
      nameKinyarwanda: 'Injangwe', 
      sound: '/sounds/animals/injangwe.mp3', 
      emoji: '🐈',
      fallbackText: "Injangwe"
    },
    { 
      id: '4', 
      name: 'Lion', 
      nameKinyarwanda: 'Intare', 
      sound: '/sounds/animals/intare.mp3', 
      emoji: '🦁',
      fallbackText: "Intare"
    },
  ];

  const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [soundError, setSoundError] = useState<string | null>(null);
  const { play: playSound } = useSound(
    currentAnimal?.sound || '', 
    currentAnimal?.fallbackText
  );

  const handleAnimalClick = async (animal: Animal) => {
    setCurrentAnimal(animal);
    setSoundError(null);
    setFeedback(`Urumve ${animal.nameKinyarwanda}`);
    
    // TEMPORARY: Mock sound playback
  console.log(`[MOCK] Playing sound for ${animal.nameKinyarwanda}`);
  return true;

  /* REAL IMPLEMENTATION - COMMENTED OUT FOR NOW
  try {
    const success = await playSound();
    if (!success) {
      alert('Ntago ijwi ryumvikanye. Gerageza kuvura permission ya sound.');
    }
  } catch (error) {
    alert('Ntago ryumvikanye. Gerageza kuvura permission ya sound.');
  }
  */
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setCurrentAnimal(animals[randomIndex]);
    setFeedback('');
    setSoundError(null);
  };

  return (
    <GameWrapper onBack={onBack} title="Amajwi y'inyamaswa">
      <div className="flex flex-col items-center">
        {currentAnimal ? (
          <>
            <div className="text-8xl my-6 animate-bounce">{currentAnimal.emoji}</div>
            <p className="text-xl font-semibold mb-4 text-gray-700">{currentAnimal.nameKinyarwanda}</p>
            {feedback && <p className="text-green-600 mb-4 font-medium">{feedback}</p>}
            
            {soundError && (
              <div className="text-red-600 mb-4 p-3 bg-red-100 rounded-lg font-medium">
                {soundError}
              </div>
            )}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
              {animals.map((animal) => (
                <button
                  key={animal.id}
                  onClick={() => handleAnimalClick(animal)}
                  className={`p-4 rounded-lg flex flex-col items-center transition-all duration-200
                    ${currentAnimal?.id === animal.id 
                      ? 'bg-blue-100 scale-105 ring-2 ring-blue-300' 
                      : 'bg-white hover:bg-gray-50 shadow-md'}`}
                >
                  <span className="text-4xl mb-2">{animal.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{animal.nameKinyarwanda}</span>
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Ikindi (Next)
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mb-6 text-center text-gray-700">
              Kanda kuri nyamaswa kumva ijwi ryayo
            </p>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-lg shadow-lg"
            >
              Tangira (Start)
            </button>
          </>
        )}
      </div>
    </GameWrapper>
  );
};

export default AnimalSoundsGame;