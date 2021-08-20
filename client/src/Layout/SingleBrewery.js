import React from "react";
import useSingleBrewery from "../Hooks/useSingleBrewery";

const SingleBrewery = (props) => {
  const [newBrewery, setNewBrewery] = React.useState({});
  const { id } = props.match.params;
  const { brewery } = useSingleBrewery(id);

  React.useEffect(() => {
    setNewBrewery(brewery);
  }, [brewery]);

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
    </div>
  );
};

export default SingleBrewery;
