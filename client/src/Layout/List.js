import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useList from "../Hooks/useList";

//renders all the breweries list. Calls our useList custom hook, fetch data, and set it as our state in the functional component to be used. Our state initializes with an array, to render the information we will need to map through the array. The link component will direct the path to the specific component.
const List = () => {
  const [newBreweries, setNewBreweries] = useState([]);

  //state in our functional component, with React hooks.
  const { breweries } = useList();

  //setting the state for the elements to show.
  useEffect(() => {
    setNewBreweries([...breweries]);
  }, [breweries]);

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row">
          {newBreweries.map((brewery, index) => {
            return (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card-deck">
                  <div className="card border border-light text-justify text-center w-200 bg-transparent">
                    <h5 className="card-header card-text cardName">
                      <strong>{brewery[1]}</strong>
                    </h5>
                    <div className="card-body">
                      <h5 className="card-title text-light">{brewery[2]}</h5>
                      <hr></hr>
                      <p className="card-text text-light">
                        <strong>
                          {brewery[3]}, {brewery[4]}, {brewery[5]}, {brewery[6]}
                        </strong>
                      </p>
                      <p className="card-text cardName card-title">
                        <Link to={`/brewery/${brewery[0]}`}>
                          <button href=".." className="btn btn-secondary">
                            Go visit ! <li className="fas fa-beer"></li>
                          </button>
                        </Link>
                      </p>
                      <br></br>
                      <label className="card-text card-img-top">
                        <a href={brewery[7]}>
                          <strong>{brewery[7]}</strong>
                        </a>
                      </label>
                    </div>
                  </div>
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
