import { useState, useEffect } from "react";
import axios from "axios";

const useList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [breweries, setBreweries] = useState([]);

  //fetching and setting data with React hooks
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://api.openbrewerydb.org/breweries?by_state=new_york`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBreweries(() => {
          return [
            ...new Set(
              [...res.data].map((brewery) => [
                brewery.id,
                brewery.name,
                brewery.brewery_type,
                brewery.street,
                brewery.city,
                brewery.state,
                brewery.postal_code,
                brewery.website_url,
              ])
            ),
          ];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, []);

  return { loading, error, breweries, hasMore };
};

export default useList;
