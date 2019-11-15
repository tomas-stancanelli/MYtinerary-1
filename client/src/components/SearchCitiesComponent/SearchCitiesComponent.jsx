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
      {data.ciudades ? (
        data.ciudades.map((item, i) => (
          <div key={i}>
            <Link to={`/cities/${item.title}`}>
              <div className="noLink">{item.name}</div>
              <div className="noLink2">({item.country.toUpperCase()})</div>
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
  );
};

export default SearchCitiesComponent;
