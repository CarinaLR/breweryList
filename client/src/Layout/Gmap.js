import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

var googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEYS;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
    };
    console.log("STATE", this.state.location);
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    console.log("render", this.state.location.lng);

    return (
      <div className="row" style={{ height: "100vh", width: "100%" }}>
        <h2 className="map-h2">Come Visit Us At Our Brewery</h2>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: googleApiKey,
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.state.location.lat}
              lng={this.state.location.lng}
              text="HERE"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Gmap;
