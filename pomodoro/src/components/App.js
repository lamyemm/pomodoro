import React, { Component } from 'react';
// import logo from './tomato.jpg';
import Timer from './timer.js';



class App extends Component {


  constructor(props) {
    super(props);
    this.state = ({
        isActive: false,
        minutes: 20,
        seconds: 0,
        stockMin: 25
    });
    this.addMinute = this.addMinute.bind(this);
    this.removeMinute = this.removeMinute.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRemoveSecondeClick = this.handleRemoveSecondeClick.bind(this);
}

handleStartClick() {
  if (this.state.isActive === false) {
    this.setState(
      {
        isActive: true
      },
      function() {
        var timer = setInterval(this.handleRemoveSecondeClick, 1000);
      }
    );
  } else {
    clearInterval(this.timerSeconde);
    this.setState({
      isActive: false,
      minutes: this.state.stockMin,
      seconds: 0
    });
  }
}

handleRemoveSecondeClick() {
  if (this.state.minutes === 0 && this.state.seconds === 0) {
    return;
  }

  if (this.state.seconds === 0) {
    this.state.minutes -= 1;
    this.state.seconds = 60;
  }

  this.setState({
    seconds: (this.state.seconds -= 1)
  });
}

addMinute() {
  this.setState({
      minutes: this.state.minutes + 1
  });
  console.log('just added a minute')
}

removeMinute() {
  this.setState({
      minutes: this.state.minutes - 1
  });
}

startTimer() {
    console.log("start")
}

stopTimer() {
    console.log("stop")
}

resetTimer() {
    console.log("reset")
}




  render() {
    return (
      <div className="App">
        <Timer 
          handleStart={this.handleStartClick}
          value={this.state}
          addclick={this.addMinute}
          removeclick={this.removeMinute}
        />
      </div>
      
    );
  }
}

export default App;
