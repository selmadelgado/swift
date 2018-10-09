import React, { Component } from "react";

class Parts extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let bodyClass, wheelClass, handlebarClass
    bodyClass = wheelClass = handlebarClass = "waves-effect waves-light red btn lighten-3"

    switch(this.props.selectedPart) {
      case 'body':
        bodyClass = "waves-effect waves-light red btn lighten-1"
        break;
      case 'wheel':
        wheelClass = "waves-effect waves-light red btn lighten-1"
        break;
      case 'handlebar':
        handlebarClass = "waves-effect waves-light red btn lighten-1"
        break;
    }

    return (
      <div className="row">
        <div className="col s12 center">
          <span onClick={() => this.props.changeSelectedPart('body')} className={bodyClass}>Body</span>
          <span onClick={() => this.props.changeSelectedPart('wheel')} className={wheelClass}>Wheels</span>
          <span onClick={() => this.props.changeSelectedPart('handlebar')} className={handlebarClass}>Handlebars</span>
        </div>
      </div>
  );
  }
}
export default Parts;

