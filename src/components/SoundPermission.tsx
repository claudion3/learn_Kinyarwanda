import React, { useState, useEffect } from 'react';


interface SoundPermissionProps {
  onUnlock: () => void;
}

const SoundPermission: React.FC<SoundPermissionProps> = ({ onUnlock }) => {

 // TEMPORARY: Auto-unlock for visual testing
  useEffect(() => {
    console.log('[MOCK] Sound permission automatically granted for testing');
    onUnlock();
  }, [onUnlock]);

  return null; // Don't show permission dialog

    //   const [showPermission, setShowPermission] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if on mobile device
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Try to unlock audio immediately
//   useEffect(() => {
//     const attemptUnlock = async () => {
//       try {
//         // Create and play silent audio
//         const audio = new Audio();
//         audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...';
//         audio.volume = 0;
        
//         await audio.play();
//         onUnlock();
//       } catch (error) {
//         console.log('Audio permission required');
//         setShowPermission(true);
//       }
//     };

//     attemptUnlock();
//   }, [onUnlock]);

//   const handleUnlockClick = async () => {
//     try {
//       const audio = new Audio();
//       audio.src = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...';
//       audio.volume = 0;
      
//       await audio.play();
//       setShowPermission(false);
//       onUnlock();
//     } catch (error) {
//       console.error('Audio unlock failed:', error);
//       alert('Ntago ryumvikanye. Gerageza kuvura permission ya sound.');
//     }
//   };

//   if (!showPermission) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-md mx-4">
//         <h2 className="text-xl font-bold mb-4">Permission ya Sound</h2>
        
//         {isMobile ? (
//           <div className="mb-4">
//             <p className="mb-2">Kugirango umve amajwi:</p>
//             <ol className="list-decimal pl-5 space-y-1">
//               <li>Kanda "Vura Permission"</li>
//               <li>Hitamo "Allow" mu dialog</li>
//               <li>Kanda "Reload" nyuma yo guhanga permission</li>
//             </ol>
//           </div>
//         ) : (
//           <p className="mb-4">Kugirango umve amajwi, dukeneye ko uvura permission.</p>
//         )}

//         <div className="flex flex-col space-y-2">
//           <button
//             onClick={handleUnlockClick}
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//           >
//             Vura Permission
//           </button>
          
//           {isMobile && (
//             <button
//               onClick={() => window.location.reload()}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:blue-green-700 transition-colors mt-2"
//             >
//               Reload Page
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
};

export default SoundPermission;