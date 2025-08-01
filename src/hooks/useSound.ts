import { useState, useEffect, useCallback } from 'react';

const useSound = (src: string, fallbackText?: string) => {
 // TEMPORARY: Mock sound function for visual testing
  const play = async () => {
    console.log(`[MOCK] Would play sound: ${src}`);
    console.log(`[MOCK] Fallback text: ${fallbackText}`);
    return true;
  };

  return { play };
 
 
  // const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  // const [isReady, setIsReady] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);

  // // Initialize audio
  // useEffect(() => {
  //   const audioObj = new Audio(src);
  //   audioObj.preload = 'auto';
    
  //   const handleCanPlay = () => setIsReady(true);
  //   const handleError = () => {
  //     console.error(`Error loading sound: ${src}`);
  //     setIsReady(false);
  //   };
  //   const handleEnded = () => setIsPlaying(false);

  //   audioObj.addEventListener('canplaythrough', handleCanPlay);
  //   audioObj.addEventListener('error', handleError);
  //   audioObj.addEventListener('ended', handleEnded);

  //   setAudio(audioObj);

  //   return () => {
  //     audioObj.removeEventListener('canplaythrough', handleCanPlay);
  //     audioObj.removeEventListener('error', handleError);
  //     audioObj.removeEventListener('ended', handleEnded);
  //     audioObj.pause();
  //     audioObj.src = '';
  //   };
  // }, [src]);

  // const play = useCallback(async () => {
  //   if (!audio || !isReady) return;

  //   try {
  //     audio.currentTime = 0;
  //     setIsPlaying(true);
  //     await audio.play();
  //   } catch (error) {
  //     console.error('Playback failed:', error);
  //     setIsPlaying(false);
      
  //     // Fallback to TTS if available
  //     if (fallbackText && 'speechSynthesis' in window) {
  //       const utterance = new SpeechSynthesisUtterance(fallbackText);
  //       utterance.lang = 'rw-RW'; // Kinyarwanda language code
  //       window.speechSynthesis.speak(utterance);
  //     }
  //   }
  // }, [audio, isReady, fallbackText]);

  // return { play, isPlaying };
};

export default useSound;