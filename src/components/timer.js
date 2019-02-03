import React, { Component } from 'react';


class Timer extends Component {


    render() {
        return (
            <div className="main">

    {/* Title */}

                <div className="logo">

                    <p>Pomodoro</p>

                </div>

    {/* Rendering of the minutes and seconds */}

                <div className="time">
                    <p>
                        {this.props.timeNow.minute < 10
                            ? "0" + this.props.timeNow.minute
                            : this.props.timeNow.minute}
                        :
              {this.props.timeNow.seconde < 10
                            ? "0" + this.props.timeNow.seconde
                            : this.props.timeNow.seconde}
                    </p>
                </div>

                <div>

                    <button
                        className={
                            this.props.timeNow.start ? "invisible" : "card-footer-item"
                        }
                        disabled={this.props.stop}
                        onClick={this.props.addclick}
                        className="addOrRemove">
                        <i className="fas fa-plus"></i>
                    </button>

                    <button
                        className={
                            this.props.timeNow.start ? "invisible" : "card-footer-item"
                        }
                        onClick={this.props.removeclick}
                        className="addOrRemove" >
                        <i className="fas fa-minus"></i>
                    </button>

                </div>

    {/* Buttons: either Start or Reset depending on the state of the click*/}

                <div className="toggle">

                    <button
                        className="card-footer-item"
                        onClick={this.props.startButton}
                    >
                        {this.props.timeNow.start ? "Reset" : "Start"}
                    </button>

                </div>

            </div>
        );
    }
}

export default Timer;


