import React from "react";
import useSingleBrewery from "../Hooks/useSingleBrewery";
import Gmap from "./Gmap";
import bar_resto from "../assets/bar_resto.jpg";
import brewery_logo from "../assets/brewery_logo.png";

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
          <div
            className="col-md-6 mb-4 flex-align-center flex-column"
            key={newBrewery.id}
          >
            <div className="card text-center">
              <div className="card-header bg-secondary text-warning">
                <h4>{newBrewery.name}</h4>
              </div>
              <div className="card-body bg-dark">
                <h5 className="card-title">
                  <a href={brewery.website_url}>
                    <strong>{brewery.website_url}</strong>
                  </a>
                </h5>
                <p className="card-text text-light">
                  <strong>
                    {newBrewery.street}, {newBrewery.city}, {newBrewery.state},{" "}
                    {newBrewery.postal_code}
                  </strong>
                </p>
              </div>
              <div className="card-footer bg-secondary text-light">
                {newBrewery.brewery_type}
              </div>
            </div>
            <hr></hr>
            <img src={bar_resto} alt="..." class="img-thumbnail"></img>
          </div>
          <div className="col-md-6 mb-4 flex-align-center flex-column">
            <Gmap location={location} />
            <hr></hr>
            <img
              src={brewery_logo}
              alt="..."
              class="img-thumbnail"
              style={{ width: "18em" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrewery;
