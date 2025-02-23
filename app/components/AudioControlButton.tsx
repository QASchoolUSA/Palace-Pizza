"use client";
import { useAudio } from "@/contexts/AudioContext";
import { Play, Pause } from "lucide-react";

export default function AudioControlButton() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg 
                 hover:bg-gold transition flex items-center space-x-2"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      <span className="hidden md:inline">{isPlaying ? "Pause Music" : "Play Music"}</span>
    </button>
  );
}