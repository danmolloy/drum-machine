import './App.css';
import Display from './display.js'
import React from 'react';

const sounds = [
  {
    key: 'Q',
    keyCode: 81,
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    keyCode: 87,
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    keyCode: 69,
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    keyCode: 65,
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    keyCode: 83,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    keyCode: 68,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    keyCode: 90,
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    keyCode: 88,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    keyCode: 67,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.audio = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    this.setState({
      display: "Drop a beat"
    })
  }

  componenetWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
  
  handleKeydown = (e) => {
    for (let i = 0; i < sounds.length; i++) {
      if (sounds[i].keyCode === e.keyCode) {
      this.setState({
          display: String.fromCharCode(e.keyCode) 
        })}
  }}
  

  handleClick(e) {
    console.log("click e: " + e)
    const audio = e.target.querySelector('audio');
    audio.play();
    audio.currentTime = 0;
    this.setState({
      display: e.target.value
    })
  }

  render() {
  return (
    <div id="drum-machine">
      <div id="drumpad">
      {sounds.map(i => (
            <button
              className="drum-pad"
              id={i.key}
              key={i.key}
              onClick={this.handleClick}
              onKeyDown={this.handleClick}
              value={i.key}
            >{i.key}
            <audio 
            className="clip" 
            id={i.key}
            src={i.url}
            ref={this.audio}
            /></button>
          ))}
      </div>
      <Display display={this.state.display}/>
    </div>
  );
}
}

export default App;

