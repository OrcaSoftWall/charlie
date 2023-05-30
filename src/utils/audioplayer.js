import React, { useState, useEffect } from "react";
import music from '../videos/A World Of Difference.mp3'

const useAudio = url => {
  const [audio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      {/* <iframe src={music} allow="autoplay"></iframe> */}
    </div>
  );
};

export default Player;