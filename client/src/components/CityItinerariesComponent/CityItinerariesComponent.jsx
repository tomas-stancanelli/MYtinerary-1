import React from "react";
import gif from "../../assets/loading.gif";
import "./CityItinerariesComponentStyles.css";
import { Link } from 'react-router-dom';

const CityItinerariesComponent = ({ itineraries, cityData }) => {
  return (
    <div className={"container2"}>
      {cityData ? (
        <div className={"container2"}>
          <div className={"col-md-12 col-sm-12"}>
            <img src={cityData.singleCityFromRoutes[0].image} alt="" />
            <span className={"inside"}>
              {cityData.singleCityFromRoutes[0].name.toUpperCase()}
            </span>
          </div>
          {itineraries.itinerariesForACity && cityData.singleCityFromRoutes && itineraries.itinerariesForACity.itinerariesForACity.itinerariesForACity.length !== 0 ? (
            <div className={"margTop"}>
              <h2>
                Available MYtineraries
                <br />
              </h2>
              <div className={"div col-lg-12 col-md-12 col-sm-12"}>
                {itineraries.itinerariesForACity.itinerariesForACity.itinerariesForACity.map(
                  (item, i) => (
                    <div key={i}>
                      <div>
                        <div className="container margTop">
                          <div className="row">
                            <div
                              className={
                                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                              }
                            >
                              <div className={"container2 flexContCol"}>
                                <img
                                  className={"profile"}
                                  src={item.profile_pic}
                                  alt=""
                                />
                                <div>{item.user}</div>
                              </div>
                            </div>

                            <div
                              className={
                                "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                              }
                            >
                              <div>{item.title}</div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Likes:&nbsp;</div>
                                  <div>{item.rating}</div>
                                </div>
                              </div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Duration:&nbsp;</div>
                                  <div>{item.duration}hs.</div>
                                </div>
                              </div>

                              <div>
                                <div className={"flexContProp"}>
                                  <div className={"align"}>Price:&nbsp;</div>
                                  <div>${item.price}</div>
                                </div>
                              </div>

                              <div className={"blue"}>
                                {/* {item.hashtags} */}
                                {item.hashtags.map((hashtags, i) => (
                                  <div key={i} className={"hashLinks"}>
                                    <a href="#">#{hashtags}&nbsp;&nbsp;</a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={"container2 flexContLeft"}></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
          <h1>There are no itineraries available for {cityData.singleCityFromRoutes[0].name}. Would you like to <span className={"blue"}><Link to={'/itineraries/add'}>add one?</Link></span></h1>
          )}
        </div>
      ) : (
        <div className="flexCont">
          <img className="loading4" src={gif} alt="" />
        </div>
      )}
    </div>
  );
};

export default CityItinerariesComponent;
