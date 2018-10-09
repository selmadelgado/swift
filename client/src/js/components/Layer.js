import React, { Component } from "react";

class Layer extends Component {

  constructor(props) {
    super(props)
    this.layerLoaded = this.layerLoaded.bind(this)
  }

  layerLoaded(e) {
    // to make it fit the size of screen
    const height = e.currentTarget.clientHeight+"px"
    document.getElementsByClassName('layers')[0].style.height = height
  }

  render() {
    return (
      <div className="layer">
        <img onLoad={this.layerLoaded.bind(this)} src={this.props.imageSrc} />
      </div>
    );
  }
}
export default Layer;