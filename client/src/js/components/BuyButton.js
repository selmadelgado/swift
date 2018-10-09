import React, { Component } from "react";

class Layer extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const price = this.props.basePrice + this.props.additionalPrice

    return (
      <div className="row">
        <div className="custom-price">
          <h5 className="red-text">${price}</h5>
          <span onClick={this.props.buyNow} className="waves-effect waves-light teal lighten-2 btn">BUY NOW</span>
        </div>
      </div>
    );
  }
}
export default Layer;