// your ImageSlider code here!
import React, { Component } from "react";

// your Bomb code here!
class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0,
        }
    }

    render() {
    return <p>I am on slide {this.state.currentSlideIndex}</p>
    }
}

export default ImageSlider;