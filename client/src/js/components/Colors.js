import React, { Component } from "react";
import ReactDOM from "react-dom";
import Color from "./Color";

class Colors extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const displayColor = (color) => {
      const {
        selectedBodyColor,
        selectedWheelColor,
        selectedHandlebarColor
      } = this.props.colors

      let active = false

      if (color.part == 'body' && selectedBodyColor == color.colorCode) {
        active = true
      } else if (color.part == 'wheel' && selectedWheelColor == color.colorCode) {
        active = true
      } else if (color.part == 'handlebar' && selectedHandlebarColor == color.colorCode) {
        active = true
      }

      return <Color changeColor={this.props.changeColor} active={ active } color={color} />

    }

    return (
      <div className="row">
        <div className="col s12 center">
          { this.props.colors.showColors.map(displayColor) }
        </div>
      </div>
    );
  }
}
export default Colors;