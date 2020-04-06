import React, {Component} from 'react';

class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  checkTime = (seconds) => seconds > 0 ? seconds + ' seconds left before I go boom!' : 'Boom!'

  render() {
    return <div><h1>{this.checkTime(this.state.secondsLeft)}</h1></div>
  }
  
}

export default Bomb;