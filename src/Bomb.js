import React, { Component } from "react";

// your Bomb code here!
class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            // interval: window.setInterval(this.tickDown, 1000),
            secondsLeft: props.initialCount,
        }
    }

    // tickDown = () => {
    //     this.setState(
    //         {secondsLeft: this.state.secondsLeft - 1}
    //     )
    //     if(this.state.secondsLeft === 0) clearInterval(this.state.interval);
    // }

    render() {
        return <div>{this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}</div>
    }
}

export default Bomb;