import React from "react";
import useSingleBrewery from "../Hooks/useSingleBrewery";
import GoogleMapReact from "google-map-react";

var googleKey = process.env.GOOGLE_MAPS_API_KEYS;

const SingleBrewery = (props) => {
  const [newBrewery, setNewBrewery] = React.useState({});
  const { id } = props.match.params;
  const { brewery } = useSingleBrewery(id);

  React.useEffect(() => {
    setNewBrewery(brewery);
  }, [brewery]);

  const defaultProps = {
    center: {
      lat: brewery.latitude,
      lng: brewery.longitude,
    },
    zoom: 11,
  };

  return (
    <div className="container">
      <h4>Single Brewery</h4>
      <div key={newBrewery.id}>
        <div>
          <h2>{newBrewery.name}</h2>
        </div>
        <div>
          <label className="card-text">
            <strong>
              {newBrewery.street}, {newBrewery.city}, {newBrewery.state},{" "}
              {newBrewery.postal_code}
            </strong>
          </label>
        </div>
      </div>

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default SingleBrewery;
