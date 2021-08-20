import React from "react";
import useSingleBrewery from "../Hooks/useSingleBrewery";
import Gmap from "./Gmap";

const SingleBrewery = (props) => {
  const [newBrewery, setNewBrewery] = React.useState({});
  const { id } = props.match.params;
  const { brewery } = useSingleBrewery(id);

  React.useEffect(() => {
    setNewBrewery(brewery);
  }, [brewery]);

  const location = {
    address: `${newBrewery.street}, ${newBrewery.city}, ${newBrewery.state}`,
    lat: newBrewery.latitude,
    lng: newBrewery.longitude,
  };
  console.log("DATA", newBrewery);
  console.log("location", location);
  return (
    <div className="container-fluid">
      <div key={newBrewery.id}>
        <div class="card text-center">
          <div class="card-header">
            <h4>{newBrewery.name}</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <a href={brewery.website_url}>
                <strong>{brewery.website_url}</strong>
              </a>
            </h5>
            <p class="card-text">
              <strong>
                {newBrewery.street}, {newBrewery.city}, {newBrewery.state},{" "}
                {newBrewery.postal_code}
              </strong>
            </p>
          </div>
          <div class="card-footer text-muted">{newBrewery.brewery_type}</div>
        </div>
      </div>
      <Gmap location={location} />
    </div>
  );
};

export default SingleBrewery;
