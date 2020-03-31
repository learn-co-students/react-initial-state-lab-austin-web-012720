// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    const message = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

    return (
      <div>
        {message}
      </div>
    )
  }
}

export default Bomb;
