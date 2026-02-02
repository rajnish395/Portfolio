import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSound } from "./SoundProvider";

export default function usePageSound() {
  const location = useLocation();
  const { playPageSound } = useSound();

  useEffect(() => {
    playPageSound();
  }, [location.pathname]); // ✅ every route change
}
