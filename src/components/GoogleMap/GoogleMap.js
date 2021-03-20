import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
        <Map google={this.props.google}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBMVyCkkealFbVMFmBABLVGeefjwF0h2SA')
})(MapContainer)