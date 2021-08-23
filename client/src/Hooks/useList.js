import { useState, useEffect } from "react";
import axios from "axios";

//custom hooks allow to break down the logic of fetching data and establish them in a reusable way. customs hooks have to call with the word use... first. The hook will fetch data from openBreweryDB calling axios, working with fetch syntax (promise base) it is easier to set a cancelationToken to not send extra requests. Set the state with some extras: loading: to load inside of our app, error: to set any error that we would like to show to the user, hasMore: in case there are more results, this prevents from making extra requests. useEffect will set the state and make the axios call.
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
