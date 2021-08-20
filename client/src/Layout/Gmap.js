import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

var googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEYS;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
    console.log("PROPS", props);
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map" style={{ height: "40vh", width: "40%" }}>
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
              lat={this.props.location.lat}
              lng={this.props.location.lng}
              text="HERE"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Gmap;
