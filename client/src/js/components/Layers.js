import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layer from "./Layer";

class Layers extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const displayLayer = (layer) => <Layer imageSrc={layer.imageSrc} />;

    return (
      <div className="row">
        <div className="layers" style={{ height: this.props.layerWrapperHeight }}>
          { this.props.layers.map(displayLayer) }
        </div>
      </div>
    );
  }
}
export default Layers;