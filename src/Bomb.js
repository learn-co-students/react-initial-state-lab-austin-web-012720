import React, { Component } from 'react';

class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  displayCount = () => {
    if (this.state.secondsLeft === 0) {
      return <div>Boom!</div>
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }
  }

  render() {
    return (
      <div>{this.displayCount()}</div>
    )
  }
}

export default Bomb;