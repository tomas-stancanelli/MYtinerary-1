import React from "react";
import gif from "../../assets/loading.gif";
import "./SearchCitiesComponentStyle.css";
import { Link } from "react-router-dom";

const SearchCitiesComponent = ({ onChange, data }) => {
  return (
    <div>
      <h1 className="noLink5">Search for a City</h1>
      <label htmlFor="filter"></label>
      <input
        type="text"
        id="filter"
        onChange={onChange}
        placeholder="Type a city here..."
      />

<div className="container">
  <div className="row justify-content-center">
      {data.ciudades ? (
        data.ciudades.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-12 col-sm-12 marg2">
                <Link to={`/cities/${item.title}`}>
                  <p className="noLink p">{item.name}</p>
                  <p className="noLink2 p">({item.country.toUpperCase()})</p>
                  <img className={"marg"} src={item.image} alt="" />
                </Link>
                <hr />
              </div>
        ))
        ) : (
          <div className="flexCont">
          <img className="loading" src={gif} alt="" />
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default SearchCitiesComponent;
