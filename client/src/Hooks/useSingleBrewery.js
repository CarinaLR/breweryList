import { useState, useEffect } from "react";
import axios from "axios";

//custom hooks allow to break down the logic of fetching data and establish them in a reusable way. customs hooks have to call with the word use... first. The hook will fetch data from openBreweryDB calling axios with a specific id, working with fetch syntax (promise base) it is easier to set a cancelationToken to not send extra requests.
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
