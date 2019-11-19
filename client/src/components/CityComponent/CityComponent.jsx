import React from "react";
import "./CityComponentStyle.css";
import gif from "../../assets/loading.gif";

const CityComponent = ({ singleCity }) => {
  return (
    <div>
      <h1 className={"myFont6"}>Welcome to</h1>
      {singleCity ? (
        <div>
          <h1 className={"myFont6"}>{singleCity.name}</h1>
          <img className={"img"} src={singleCity.image} alt="" />
        </div>
      ):
      (
        <div className="flexCont">
          <img className="loading2" src={gif} alt="" />
        </div>
      )
      }
    </div>
  );
};

export default CityComponent;
