import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      text: 'Q',
      keyCode: 81,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      text: 'W',
      keyCode: 87,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      text: 'E',
      keyCode: 69,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      text: 'A',
      keyCode: 65,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      text: 'S',
      keyCode: 83,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      text: 'D',
      keyCode: 68,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      text: 'Z',
      keyCode: 90,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      text: 'X',
      keyCode: 88,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      text: 'C',
      keyCode: 67,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <div id="drum-machine" className="container">
      <div id="display" className="display">
        {drumPads.map((sound, idx) => (
          <div
            className="box drum-pad"
            text={sound.text}
            key={idx}
            id={sound.src}
            onClick={() => {
              playSound(sound.text);
            }}
          >
            {sound.text}
            <audio
              className="clip"
              id={sound.text}
              src={sound.src}
            ></audio>
          </div>
        ))}
        <div id='display'>{activeKey}</div>
      </div>
    </div>
  );
};

export default App;
