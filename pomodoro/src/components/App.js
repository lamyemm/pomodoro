import React from "react";
import Timer from "./timer.js";

class App extends React.Component {


  constructor(props) {   //Constructor = starting state with set data
    super(props);

    this.state = {
      
      start: false, //checks if the start function has been launched and will be changed to true once launched
      minute: 25,
      seconde: 0,
      stockMin: 25

    };

    this.startInterval = this.startInterval.bind(this);
    this.secondsAndMinutes = this.secondsAndMinutes.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.removeMinute = this.removeMinute.bind(this);
  }

  startInterval() {
    if (this.state.start === false) {
      this.setState(
        {
          start: true //will allow the button to be changed to Reset
        },

        //setInterval is a function that takes two parameters : the function to execute (here the function secondAndMinutes) and the time, here 1000ms (1sec)
        function() { 
          this.timerSeconde = setInterval(this.secondsAndMinutes, 1000);
        }
      );

    } else {
      //if the reset button is clicked, setInterval is stopped through the method clearInterval and these data are set. Has on parameter, the id sent by the method setInterval
      clearInterval(this.timerSeconde);
      this.setState({
        start: false,
        minute: this.state.stockMin,
        seconde: 0
      });
    }
  }

  secondsAndMinutes() {

    if (this.state.minute === 0 && this.state.seconde === 0) {
      return;
    }

    if (this.state.seconde === 0) {
      this.state.minute -= 1;
      this.state.seconde = 60;

    }else{

    this.setState({
      seconde: (this.state.seconde -= 1)
    
    });
  }
  }

  addMinute() {

    if (!this.state.start) {
      //if the button start has not been clicked (so it cannot be clicked at all when running), the user can only go up to 60 minutes when he adds minutes
      if (this.state.minute === 60) {
        return;
      }
      //adds one minute
      this.setState({
        minute: (this.state.minute += 1)
      });
    }
  }

  removeMinute() {
    if (!this.state.start) {
      if (this.state.minute === 0) {
        return;
      }
      this.setState({
        minute: (this.state.minute -= 1)
      }); 
    }
  }
  

  render() {
    return (
      <div>
        <Timer
          startButton={this.startInterval}
          timeNow={this.state}
          addclick={this.addMinute}
          removeclick={this.removeMinute}
        />
      </div>
    );
  }
}

export default App;
