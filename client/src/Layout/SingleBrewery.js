import React from "react";
import axios from "axios";

const SingleBrewery = (props) => {
  const [brewery, setBrewery] = React.useState({});

  const getBrewery = async () => {
    const { id } = props.match.params;
    const { data } = await axios.get(
      `https://api.openbrewerydb.org/breweries/${id}`
    );
    setBrewery(data);
  };

  React.useEffect(() => {
    getBrewery();
  });

  return (
    <div className="container">
      <h2>Single Brewery</h2>

      <div key={brewery.id}>
        <div>{brewery.name}</div>
        <div>{brewery.state}</div>
        <div>{brewery.postal_code}</div>
      </div>
    </div>
  );
};

export default SingleBrewery;
