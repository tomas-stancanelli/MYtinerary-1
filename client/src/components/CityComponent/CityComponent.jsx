import React from "react";
import "./CityComponentStyle.css";
import gif from "../../assets/loading.gif";
import { Link } from "react-router-dom";

const CityComponent = ({ singleCity, city_name }) => {
  return (
    <div>
      <h1 className={"myFont6"}>Welcome to</h1>
      {singleCity ? (
        <div>
          <h1 className={"myFont6"}>
            {singleCity.singleCityFromRoutes[0].name}
          </h1>
          <img
            className={"img"}
            src={singleCity.singleCityFromRoutes[0].image}
            alt=""
          />
          <Link to={`/itineraries/${city_name}`}>
            <h3 className={"marg"}>See itineraries for this city</h3>
            <div className={"two"}>
              <div className={"arrow marg"}></div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="flexCont">
          <img className="loading2" src={gif} alt="" />
        </div>
      )}
    </div>
  );
};

export default CityComponent;
