import React, { useState, useEffect, useRef, useCallback } from "react";
import useList from "../Hooks/useList";

const List = () => {
  const [items, setItems] = useState(0);
  const [reLoading, setReLoading] = useState(false);
  const [newBreweries, setNewBreweries] = useState([]);

  //state in our functional component, with React hooks
  const { loading, error, breweries, hasMore } = useList();

  //setting the state for the number of items
  useEffect(() => {
    setItems(breweries.length);
  }, [breweries.length]);

  //setting the state for the elements to show
  useEffect(() => {
    setNewBreweries([...breweries]);
  }, [breweries]);

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row">
          {newBreweries.map((brewery, index) => {
            return (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card border border-info">
                  <div className="card-body">
                    <p className="card-text cardName card-title">
                      <strong>{brewery[0]}</strong>
                    </p>

                    <p className="card-text card-subtitle"> {brewery[1]}</p>
                  </div>
                  <label className="card-text">
                    <strong>
                      {brewery[2]}, {brewery[3]}, {brewery[4]}, {brewery[5]}
                    </strong>
                  </label>
                  <br></br>
                  <label className="card-text">
                    <a href={brewery[6]}>
                      <strong>{brewery[6]}</strong>
                    </a>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default List;
