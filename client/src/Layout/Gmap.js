import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

var googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEYS;

//render on the map, the text and an icon to specify the brewery's location.
const LocationCenter = ({ text }) => (
  <div>
    <h5>
      {text}
      <li className="fas fa-beer text-danger"></li>
    </h5>
  </div>
);

//component takes the data passing from the parent SingleBrewery functional component and renders the brewery's position on the map. Connect's a location with google maps API.
class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
    };
  }

  //static variable is used to satisfy a default render in case data is not available. It centers the map when it first loads.
  static defaultProps = {
    center: {
      lat: 40.7400479,
      lng: -73.9893474,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="row" style={{ height: "80vh", width: "100%" }}>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: googleApiKey,
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <LocationCenter lat={40.7400479} lng={-73.9893474} text={"HERE"} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Gmap;
