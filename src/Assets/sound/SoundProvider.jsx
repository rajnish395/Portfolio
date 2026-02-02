import React, { createContext, useContext, useState, useRef } from "react";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useState(true);

  // ✅ reuse audio objects (fast)
  const pageAudio = useRef(new Audio("/sounds/page.mp3"));
  const clickAudio = useRef(new Audio("/sounds/click.mp3"));

  const playPageSound = () => {
    if (!soundOn) return;
    pageAudio.current.currentTime = 0;
    pageAudio.current.volume = 0.25;
    pageAudio.current.play().catch(() => {});
  };

  const playClickSound = () => {
    if (!soundOn) return;
    clickAudio.current.currentTime = 0;
    clickAudio.current.volume = 0.25;
    clickAudio.current.play().catch(() => {});
  };

  return (
    <SoundContext.Provider
      value={{ soundOn, setSoundOn, playPageSound, playClickSound }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
