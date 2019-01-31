
import React, { Component } from 'react';
import './App.css';
import ButtonPlus from './buttonPlus';



class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            minutes: 20,
            seconds: 0
        };
        this.addMinute = this.addMinute.bind(this);
        this.removeMinute = this.removeMinute.bind(this);

    }
    setInterval(){ 
        alert("Hello"),
    3000}
    ;

    addMinute() {
        this.setState({
            minutes: this.state.minutes + 1
        });
      }

      removeMinute(){
        this.setState({
            minutes: this.state.minutes - 1
        });
      }


      

    render() {
        return (
            <div className="timer">

                <p className="time">{this.state.minutes} : {this.state.seconds}</p>
                <div class="buttons">
                <button className="btn-primary" onClick={this.addMinute}>+</button>
                <button onClick={this.setInterval}>Start</button>
                <button className="btn-primary" onClick={this.removeMinute}>-</button>
                </div>
            </div>
        );
    }
}

export default Timer;




// <div className="app-child">
// <div className="container-fluid">

//     <div className="row">
//         <h2 className="text-center">Pomodoro or what?!</h2>
//     </div>

//     <div className="row">
//         <h2 className="text-center">Min : </h2>
//         <h2 className="text-center">Secondes</h2>
//     </div>

//     <button type="button" className="btn btn-danger">Reset</button>

// </div>

// </div>