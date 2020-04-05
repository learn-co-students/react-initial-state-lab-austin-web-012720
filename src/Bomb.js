// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          this.setState(({ secondsLeft }) => ({
            secondsLeft: secondsLeft -1
          }))
        }, 1000)
      }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <div>{message}</div>
        )
    }
}


export default Bomb