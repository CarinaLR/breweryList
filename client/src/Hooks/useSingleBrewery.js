import { useState, useEffect } from "react";
import axios from "axios";

const useSingleBrewery = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [brewery, setBrewery] = useState({});

  //fetching and setting data with React hooks
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://api.openbrewerydb.org/breweries/${id}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBrewery(() => {
          return res.data;
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
  }, [id]);
  return { loading, error, brewery, hasMore };
};

export default useSingleBrewery;
