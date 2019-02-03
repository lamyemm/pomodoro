import React, { Component } from 'react';


class Timer extends Component {



    render() {
        return (
            <div className="main">
            <div className="logo">
            <p>Pomodoro</p>
            </div>
                <div className="time">
                    <p>
                    {this.props.value.minutes < 10
                ? "0" + this.props.value.minutes
                : this.props.value.minutes}
              :
              {this.props.value.seconds < 10
                ? "0" + this.props.value.seconds
                : this.props.value.seconds}
                    </p>
                    
                    <div>
                        <button onClick={this.props.addclick}><i className="fas fa-plus"></i></button>
                        <button onClick={this.props.removeclick}><i className="fas fa-minus"></i></button>
                    </div>
                </div>

                <div className="toggle">
                    <button onClick={this.props.handleStart} >Start</button>
                    <button onClick={this.stopTimer} >Stop</button>
                    <button onClick={this.resetTimer} >Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;


