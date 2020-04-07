import React from 'react';
import './App.css';
import Display from './Display';
import DrumPad from './DrumPad';

class App extends React.Component {
  constructor(props){
    super(props);
    this.updateDisplayWindow = this.updateDisplayWindow.bind(this);
    this.state = {
      displayWindow: ' ',
    };
  }
  
  updateDisplayWindow(drumType){
    this.setState({
      displayWindow: drumType
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="drums">
          <DrumPad drumType="boom" keyName="Q" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="clap" keyName="W" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="hihat" keyName="E" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="kick" keyName="A" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="openhat" keyName="S" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="ride" keyName="D" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="snare" keyName="Z" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="tink" keyName="X" updateDisplay={this.updateDisplayWindow}/>
          <DrumPad drumType="tom" keyName="C" updateDisplay={this.updateDisplayWindow}/>
        </div>
        <div id="display">
          <Display displayWindow={this.state.displayWindow}/>          
        </div>
      </div>
    )
  }
}

export default App;
