import React, { useState } from 'react';
import useSound from '../../hooks/useSound';
import GameWrapper from '../../components/GameWrapper';

interface Color {
  id: string;
  name: string;
  nameKinyarwanda: string;
  hex: string;
  sound: string;
  fallbackText: string;
}

const ColorsGame: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const colors: Color[] = [
    { 
      id: '1', 
      name: 'Red', 
      nameKinyarwanda: 'Umutuku', 
      hex: '#EF4444', 
      sound: '/sounds/colors/umutuku.mp3',
      fallbackText: "Umutuku"
    },
    { 
      id: '2', 
      name: 'Blue', 
      nameKinyarwanda: 'Ubururu', 
      hex: '#3B82F6', 
      sound: '/sounds/colors/ubururu.mp3',
      fallbackText: "Ubururu"
    },
    { 
      id: '3', 
      name: 'Green', 
      nameKinyarwanda: 'Icyatsi', 
      hex: '#10B981', 
      sound: '/sounds/colors/icyatsi.mp3',
      fallbackText: "Icyatsi"
    },
  ];

  const [currentColor, setCurrentColor] = useState<Color | null>(null);
  const { play: playSound } = useSound(
    currentColor?.sound || '',
    currentColor?.fallbackText
  );

  const handleColorClick = async (color: Color) => {
    setCurrentColor(color);
    try {
      await playSound();
    } catch (error) {
      console.error('Sound playback error:', error);
    }
  };

  return (
    <GameWrapper onBack={onBack} title="Amabara mu Kinyarwanda">
      <div className="grid grid-cols-2 gap-4 mb-8">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => handleColorClick(color)}
            className={`h-32 rounded-lg flex flex-col items-center justify-center text-white font-bold transition-all
              ${currentColor?.id === color.id 
                ? 'ring-4 ring-yellow-400 scale-105' 
                : 'shadow-md hover:shadow-lg'}`}
            style={{ backgroundColor: color.hex }}
          >
            <span className="text-xl">{color.nameKinyarwanda}</span>
            <span className="text-sm">{color.name}</span>
          </button>
        ))}
      </div>
      
      {currentColor && (
        <div className="p-6 rounded-lg text-center shadow-lg" style={{ backgroundColor: currentColor.hex }}>
          <p className="text-2xl font-bold text-white">{currentColor.nameKinyarwanda}</p>
          <p className="text-white">{currentColor.name}</p>
          <button
            onClick={() => playSound().catch(console.error)}
            className="mt-4 px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg flex items-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Vuza nanone (Repeat)
          </button>
        </div>
      )}
    </GameWrapper>
  );
};

export default ColorsGame;