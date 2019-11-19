import React from "react";
import "./HomeComponentStyle.css";
// import arrow from "./HomeComponentImages/circled-right-2.jpg";
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
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className={"Apps"}>
      <div className={"cen"}>
        <h2 className={"myFont marg"}>
          Find your perfect trip,
          <br />
          designed by insiders who know and love their cities.
        </h2>
      </div>
      <h3 className={"myFont myFont2 marg3"}>View all cities here!</h3>
      <Link to="/search">
        <div className={"two"}>
          <div className={"arrow marg"}></div>
        </div>
      </Link>

      <h2 className={"myFont lefty"}>Popular MYtinerarys</h2>
      <div className={"flexImg"}>
        <div
          id="carouselExampleControls"
          className="carousel slide one"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active one">
              <Link to="/cities/paris">
                {/* <span className="pos"></span> */}
                <div className={"pos"}>
                  <span className={"pos"}></span>
                  <img
                    className="col-lg-6 col-md-6 col-sm-6 images"
                    src={paris}
                    alt="First slide"
                  />
                </div>
              </Link>
              <Link to={`/cities/amsterdam`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={amsterdam}
                  alt="Second slide"
                />
              </Link>
              <Link to={`/cities/new_york`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={newYork}
                  alt="Third slide"
                />
              </Link>
              <Link to={`/cities/barcelona`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={barcelona}
                  alt="Third slide"
                />
              </Link>
            </div>
            <div className="carousel-item one">
              <Link to={`/cities/prague`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={prague}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/london`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={london}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/mexico`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={mexico}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/montevideo`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={montevideo}
                  alt="First slide"
                />
              </Link>
            </div>
            <div className="carousel-item one">
              <Link to={`/cities/athens`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={athens}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/tokyo`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={tokyo}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/rome`}>
                <img
                  className="col-lg-6 col-md-6 col-sm-6 images"
                  src={roma}
                  alt="First slide"
                />
              </Link>
              <Link to={`/cities/rio_de_janeiro`}>
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
      </div>
    </div>
  );
};

export default HomeComponent;
