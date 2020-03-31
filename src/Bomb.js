import React from "react";

// your Bomb code here!
export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
            secondsLeft: props.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>{message}</div>
        )
        
    }
}