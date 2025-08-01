import React, { useState, useEffect } from 'react';

interface SoundPermissionProps {
  onUnlock: () => void;
}

const SoundPermission: React.FC<SoundPermissionProps> = ({ onUnlock }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const handleUnlock = async () => {
    try {
      const audio = new Audio();
      audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...';
      audio.volume = 0;
      
      await audio.play();
      onUnlock();
    } catch (error) {
      console.error('Audio unlock failed:', error);
      alert('Ntago ryumvikanye. Gerageza kuvura permission ya sound.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Permission ya Sound</h2>
        
        {isMobile ? (
          <>
            <p className="mb-2">Kugirango umve amajwi:</p>
            <ol className="list-decimal pl-5 space-y-1 mb-4">
              <li>Kanda "Vura Permission"</li>
              <li>Hitamo "Allow" mu dialog</li>
              <li>Kanda "Reload" nyuma yo guhanga permission</li>
            </ol>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">Kugirango umve amajwi, dukeneye ko uvura permission.</p>
            <button
              onClick={handleUnlock}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Vura Permission
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SoundPermission;