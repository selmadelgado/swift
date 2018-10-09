import React, { Component } from "react";
import ReactDOM from "react-dom";
import mergeImages from 'merge-images';
import Layers from "./Layers";
import Parts from "./Parts";
import Colors from "./Colors";
import BuyButton from "./BuyButton";

const fetchQuery = `/fetchLayers`

class App extends Component {

  constructor() {
    super()
    this.fetchData = this.fetchData.bind(this)
    this.changeSelectedPart = this.changeSelectedPart.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.changeLayer = this.changeLayer.bind(this)
    this.storeOrder = this.storeOrder.bind(this)
    this.getPrice = this.getPrice.bind(this)
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    let state = {}
    fetch(fetchQuery)
    .then(response => response.json())
    .then(data => {
      const { basePrice, layers: allLayers } = data

      const defaultLayer = {
        imageSrc: '/bikes/Bike-Layers_0000s_0013_Original-Black-White.png',
        part: 'whole',
        additionalPrice: 0
      }

      const selectedPart = 'body'

      state = {
        basePrice,
        additionalPrice: 0,
        allLayers,
        activeLayers: [ defaultLayer ],
        defaultLayer,
        selectedPart,
        colors: {
          showColors: allLayers[selectedPart]
        }
      }

      this.setState(state)

    })
  }

  changeSelectedPart(part) {
    this.setState({
      selectedPart: part,
      colors: {
        showColors: this.state.allLayers[part],
        selectedBodyColor: this.state.selectedBodyColor | null,
        selectedWheelColor: this.state.selectedWheelColor | null,
        selectedHandlebarColor: this.state.selectedHandlebarColor | null
      }
    })
  }

  changeColor(layerId, part) {
    const colorLayer = this.state.allLayers[part].filter(e => e.id == layerId)[0]

    let state = Object.assign({}, this.state)

    // change the selectedColor
    switch(part) {
      case 'body':
        state.colors.selectedBodyColor = colorLayer.colorCode
        break;
      case 'wheel':
        state.colors.selectedWheelColor = colorLayer.colorCode
        break;
      case 'body':
        state.colors.selectedHandlebarColor = colorLayer.colorCode
        break;
    }

    // update additional price
    state.additionalPrice = colorLayer.additionalPrice

    this.changeLayer(state, colorLayer, part)
  }

  changeLayer(state, colorLayer, part) {
    // remove previously selected layer
    state.activeLayers = state.activeLayers.filter((layer) => {
      return (layer.part !== part)
    })

    // add selected layer to activeLayer
    const activeLayer = {
      imageSrc: colorLayer.imageSrc,
      part: colorLayer.part ,
      additionalPrice: colorLayer.additionalPrice ,
    }
    state.activeLayers.push(activeLayer)

    this.setState(state)
  }

  storeOrder() {
    const layers = this.state.activeLayers.map((layer) => {
      return layer.imageSrc
    })

    this.mergeLayers(layers)
    .then((imgBase64Src) => {
      console.log(imgBase64Src, 'imgBase64Src')

      const cart = {
        productImage: imgBase64Src,
        price: this.getPrice(),
        name: 'Customised Bike'
      }

      localStorage.setItem('cart', JSON.stringify(Object.assign({}, cart)))
    })
  }

  mergeLayers(layers) {
    return new Promise(function(fulfill, reject){
      mergeImages(layers)
      .then(b64 => fulfill(b64))
      .catch(console.log)
    })
  }

  getPrice() {
    let price = this.state.basePrice
    this.state.activeLayers.forEach((layer) => {
      price = price + layer.additionalPrice
    })

    return price
  }

  render() {

    if (!this.state) {
      return false
    }

    return (
      <div>
        <Layers layers={this.state.activeLayers} />
        <Parts changeSelectedPart={this.changeSelectedPart} selectedPart={this.state.selectedPart} />
        <Colors changeColor={this.changeColor} colors={this.state.colors} />
        <BuyButton buyNow={ this.storeOrder } price={this.getPrice()} />
      </div>
    );
  }
}
export default App;