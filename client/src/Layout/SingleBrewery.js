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

  const latt = parseInt(newBrewery.latitude);
  const lngg = parseInt(newBrewery.longitude);

  console.log("latt", typeof latt, latt);
  const location = {
    address: `${newBrewery.street}, ${newBrewery.city}, ${newBrewery.state}`,
    lat: latt,
    lng: lngg,
  };
  console.log("DATA", newBrewery);
  console.log("location", location);
  return (
    <div className="container-fluid">
      <div className="mt-5 pt-4">
        <div className="row">
          <div className="col-md-6 mb-4" key={newBrewery.id}>
            <div className="card text-center">
              <div className="card-header">
                <h4>{newBrewery.name}</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <a href={brewery.website_url}>
                    <strong>{brewery.website_url}</strong>
                  </a>
                </h5>
                <p className="card-text">
                  <strong>
                    {newBrewery.street}, {newBrewery.city}, {newBrewery.state},{" "}
                    {newBrewery.postal_code}
                  </strong>
                </p>
              </div>
              <div className="card-footer text-muted">
                {newBrewery.brewery_type}
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <Gmap location={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrewery;
