import React from 'react';
import './App.css';

const soundLocation = '/files/';

class DrumPad extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        drumStyle: {}
      }
      this.playKeyAudio = this.playKeyAudio.bind(this);
      this.playAudio = this.playAudio.bind(this);
      this.url = soundLocation + this.props.drumType + '.wav'; 
      this.activateDrumPad = this.activateDrumPad.bind(this);
    }
    
    componentDidMount() {
      document.addEventListener('keydown', this.playKeyAudio);
    }
    
    playKeyAudio(e) {
      if (e.keyCode === this.props.keyName.charCodeAt()) {            
        this.playAudio();      
      }    
    }
    
    playAudio() {    
      const sound = document.getElementById(this.props.keyName);
      sound.currentTime = 0;
      sound.play();   
      this.activateDrumPad();
    }
    
    activateDrumPad() {
      console.log('test')
      this.props.updateDisplay(this.props.drumType);
      this.setState(state => ({
        drumStyle: {backgroundColor: 'orange'}
      }));
      setTimeout(() => this.setState(state => ({
        drumStyle: {backgroundColor: ''}
      })), 100);
    }
  
    render() {    
      return (
        <div style={this.state.drumStyle} onClick={this.playAudio} className="drum-pad" id={this.props.drumType}>        
          <h1>{this.props.keyName}</h1>
          <audio preload="true" src={this.url} className="clip" id={this.props.keyName}></audio>
        </div>
      );
    }
  }

  export default DrumPad;