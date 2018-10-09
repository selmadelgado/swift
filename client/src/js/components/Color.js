import React, { Component } from "react";

class Color extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let className = "color btn-small"

    if (this.props.active == true) {
      className = "color selectedColor btn-small"
    }

    return (
      <span onClick={() => this.props.changeColor(this.props.color.id, this.props.color.part) } className={ className } style={{ background: this.props.color.colorCode }}></span>
    );
  }
}
export default Color;