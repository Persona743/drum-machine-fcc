import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }
  }

  render() {
    const { keys } = this.state;

    return (
      <div id='drum-machine'>
        <div id='display'>
          {keys.map((key, idx) => (
            <Box text={key} idx={idx} />
          ))}
        </div>
      </div>
    );
  }
}

const Box = (props) => {
  return (
    <div className='box'>{props.text}</div>
  )
}

export default App;
