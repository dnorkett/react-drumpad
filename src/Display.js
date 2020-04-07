import React from 'react';
import './App.css';

class Display extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return(
      <h2 id="screen"> {this.props.displayWindow} </h2>
      )
    }
  }

  export default Display;