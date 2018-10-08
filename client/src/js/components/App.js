import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = 'http://swift.test'
const fetchQuery = `/fetchLayers`

class App extends Component {

  componentDidMount(prevProps) {
    this.fetchData()
  }

  fetchData() {
    fetch(API + fetchQuery)
    .then(response => response.json())
    .then(data => {
      console.log(date)
      this.setState({ dataFetched: data })
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>
      <div className="row">
      <div className="layers">
      <div className="layer">
      <img src="/bikes/Bike-Layers_0000s_0013_Original-Black-White.png" />
      </div>
      <div className="layer">
      <img src="/bikes/Bike-Layers_0000s_0000_Wheels-Orange.png" />
      </div>
      <div className="layer">
      <img src="/bikes/Bike-Layers_0000s_0009_Body-Teal.png" />
      </div>
      <div className="layer"><img src="/bikes/Bike-Layers_0000s_0003_Bars-Pink.png" /></div>
      </div>
      </div>
      <div className="row">
      <div className="col s12 center">
      <span className="waves-effect waves-light red lighten-2 btn">Body</span>
      <span className="waves-effect waves-light red lighten-3 btn">Wheels</span>
      <span className="waves-effect waves-light red lighten-3 btn">Handlebars</span>
      </div>
      </div>
      <div className="row">
      <div className="col s12 center">
      <span className="color btn-small" style={{background: 'red'}}></span>
      <span className="color btn-small" style={{background: 'yellow'}}></span>
      <span className="color btn-small" style={{background: 'blue'}}></span>
      </div>
      </div>
      <div className="row">
      <div className="custom-price">
      <h5 className="red-text">$900</h5>
      <span className="waves-effect waves-light teal lighten-2 btn">BUY NOW</span>
    </div>
    </div>
      </div>
    );
  }
}
export default App;