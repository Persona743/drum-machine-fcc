import React, { Component } from 'react';
import './App.css';

const sound = [
  {
    keys: 'Q',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keys: 'W',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keys: 'E',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keys: 'A',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keys: 'S',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keys: 'D',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keys: 'Z',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keys: 'X',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keys: 'C',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
]

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']


const App = () => {
  return (
    <div id='drum-machine' className='container'>
      <div id='display' className='display'>
        {keys.map((key, idx) => (
          <Box text={key} idx={idx} />
        ))}
      </div>
    </div>
  );
}

class Box extends Component {
  render() {
    return (
      <div className='box'>
        {this.props.text}
        <audio />
      </div>
    );
  }
}

export default App;
