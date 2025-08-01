import React, { useState, useEffect } from 'react';
import GameCard from './components/GameCard';
import AnimalSoundsGame from './games/AnimalSounds/AnimalSoundsGame';
import AlphabetGame from './games/Alphabet/AlphabetGame';
import NumbersGame from './games/Numbers/NumbersGame';
import ColorsGame from './games/Colors/ColorsGame';
import SoundPermission from './components/SoundPermission';
import { Game } from './types/gameTypes';

const App: React.FC = () => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [soundAllowed, setSoundAllowed] = useState(false);
  const [showSoundPermission, setShowSoundPermission] = useState(false);

  // Check sound permission on mount
  useEffect(() => {
   // TEMPORARY: Bypass sound permission check for visual testing
  setSoundAllowed(true); // Comment this out later
  setShowSoundPermission(false); // Comment this out later

  /* REAL CHECK - COMMENTED OUT FOR NOW
  const checkSoundPermission = async () => {
    try {
      const audio = new Audio();
      audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...';
      audio.volume = 0;
      
      await audio.play();
      await audio.pause();
      setSoundAllowed(true);
    } catch (error) {
      console.log('Sound permission required');
      setShowPermission(true);
    }
  };

  checkSoundPermission();
  */
  }, []);

  const handleSoundUnlock = () => {
    setSoundAllowed(true);
    setShowSoundPermission(false);
  };

  const games: Game[] = [
    {
      id: 'colors',
      title: 'Amabara',
      description: 'Menya amabara mu Kinyarwanda',
      icon: '🎨',
      component: ColorsGame,
      bgColor: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    },
    {
      id: 'alphabet',
      title: 'Inyuguti',
      description: 'Igisomwa cy\'inyuguti z\'Ikinyarwanda',
      icon: '🔤',
      component: AlphabetGame,
      bgColor: 'bg-gradient-to-br from-green-400 to-blue-500',
    },
    {
      id: 'numbers',
      title: 'Imibare',
      description: 'Menya imibare 0-10 mu Kinyarwanda',
      icon: '🔢',
      component: NumbersGame,
      bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      id: 'animals',
      title: 'Inyamaswa',
      description: 'Amajwi y\'inyamaswa',
      icon: '🐾',
      component: AnimalSoundsGame,
      bgColor: 'bg-gradient-to-br from-red-400 to-pink-500',
    },
  ];

  const handleGameSelect = (gameId: string) => {
    if (!soundAllowed) {
      setShowSoundPermission(true);
      return;
    }
    setCurrentGame(gameId);
  };

  const handleBackToMenu = () => {
    setCurrentGame(null);
  };

  const renderGame = () => {
    const game = games.find(g => g.id === currentGame);
    if (!game) return null;
    const GameComponent = game.component;
    return <GameComponent onBack={handleBackToMenu} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {showSoundPermission && (
        <SoundPermission onUnlock={handleSoundUnlock} />
      )}
      
      {currentGame ? (
        renderGame()
      ) : (
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Imikino yo Kwiga
            </h1>
            <p className="text-lg text-gray-600">
              Kinyarwanda Learning Games
            </p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => handleGameSelect(game.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;