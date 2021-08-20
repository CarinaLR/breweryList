import React from "react";
import { useState } from "react";
import axios from "axios";

const SingleBrewery = (props) => {
  const [error, setError] = useState(false);
  const [brewery, setBrewery] = React.useState({});
  let cancel;

  const getBrewery = async () => {
    const { id } = props.match.params;

    try {
      const { data } = await axios({
        method: "GET",
        url: `https://api.openbrewerydb.org/breweries/${id}`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      });
      console.log("data", data);
      setBrewery(data);
    } catch (error) {
      if (axios.isCancel(error)) return;
      setError(true);
    }
    return () => cancel();
  };

  React.useEffect(() => {
    getBrewery();
  });

  return (
    <div className="container">
      <h4>Single Brewery</h4>
      <div key={brewery.id}>
        <div>
          <h2>{brewery.name}</h2>
        </div>
        <div>
          <label className="card-text">
            <strong>
              {brewery.street}, {brewery.city}, {brewery.state},{" "}
              {brewery.postal_code}
            </strong>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleBrewery;
