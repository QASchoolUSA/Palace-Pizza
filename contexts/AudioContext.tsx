"use client";
import { createContext, useState, useRef, useContext, useEffect, RefObject } from "react";

// Define the context type
interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  audioRef: RefObject<HTMLAudioElement>;
}

// Create the context
const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Provider component
export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false); // Default to not playing due to autoplay restrictions
  const audioRef = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5; // Set default volume
        audioRef.current.play().catch(() => {
          console.warn("Autoplay prevented. Waiting for user interaction.");
        });
        setIsPlaying(true); // Update state to playing
      }
      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    // Listen for first user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, audioRef }}>
      {children}
      <audio ref={audioRef} src="/DeanMartin.mp3" loop />
    </AudioContext.Provider>
  );
}

// Custom hook to use the Audio Context
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}