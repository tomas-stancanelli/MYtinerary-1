import React from "react";
import "./HomeComponentStyle.css";
import arrow from "./HomeComponentImages/circled-right-2.png";
import barcelona from "./HomeComponentImages/barcelona.jpg";
import newYork from "./HomeComponentImages/newYork.jpg";
import amsterdam from "./HomeComponentImages/amsterdam.jpg";
import paris from "./HomeComponentImages/paris.jpg";
import prague from "./HomeComponentImages/prague.jpg";
import london from "./HomeComponentImages/london.jpg";
import mexico from "./HomeComponentImages/mexico.jpg";
import montevideo from "./HomeComponentImages/montevideo.jpg";
import rio from "./HomeComponentImages/rio.jpg";
import roma from "./HomeComponentImages/roma.jpg";
import tokyo from "./HomeComponentImages/tokyo.jpg";
import athens from "./HomeComponentImages/athens.jpg";
import { Link } from 'react-router-dom'

const HomeComponent = ({cities}) => {
  return (
    <div className={"Apps"}>
      {console.log(cities.cities[0].id)}
      <h2 className={"myFont"}>
        Find your perfect trip, designed by insiders who know and love their
        cities.
      </h2>
      <img className={"arrow"} src={arrow} alt="" />
      <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>
      <div className={"flexImg"}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to={`/city/${cities.cities[0].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={paris}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[1].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={amsterdam}
                alt="Second slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[2].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={newYork}
                alt="Third slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[3].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={barcelona}
                alt="Third slide"
                />
                </Link>
                
            </div>
            <div className="carousel-item">
            <Link to={`/city/${cities.cities[4].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={prague}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[5].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={london}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[6].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={mexico}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[7].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={montevideo}
                alt="First slide"
                />
                </Link>
            </div>
            <div className="carousel-item">
            <Link to={`/city/${cities.cities[8].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={athens}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[9].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={tokyo}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[10].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={roma}
                alt="First slide"
                />
                </Link>
                <Link to={`/city/${cities.cities[11].id}`}>
              <img
                className="col-lg-6 col-md-6 col-sm-6 images"
                src={rio}
                alt="First slide"
                />
                </Link>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* <img className={"images"} src={barcelona} alt=""/>
            <img className={"images"} src={newYork} alt=""/>
            <img className={"images"} src={amsterdam} alt=""/>
            <img className={"images"} src={paris} alt=""/> */}
      </div>
    </div>
  );
};

export default HomeComponent;
