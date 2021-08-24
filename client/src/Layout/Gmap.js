import React from "react";
import GoogleMapReact from "google-map-react";

var googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEYS;

//render on the map, the text and an icon to specify the brewery's location.
const LocationCenter = ({ text }) => {
  return (
    <div>
      <h5>
        {text}
        <li className="fas fa-beer text-danger"></li>
      </h5>
    </div>
  );
};

//component takes the data passing from the parent SingleBrewery functional component and renders the brewery's position on the map. Connect's a location with google maps API.
const Gmap = ({ location, zoomLevel }) => {
  /*typecheck error when parsing lat and lng in LocationPin. Returning (NaN,NaN)*/

  //static variable is used to satisfy a default render in case data is not available. It centers the map when it first loads.
  const defaultProps = {
    center: {
      lat: 40.7400479,
      lng: -73.9893474,
    },
    zoom: 11,
  };
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={zoomLevel}
        >
          <LocationCenter
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={"HERE!"}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Gmap;
