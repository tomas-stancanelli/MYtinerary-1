import gif from "../../assets/loading.gif";
import "./CityItinerariesComponentStyles.css";
import backgroundPrev from "./CityItinerariesComponentImages/pngguru.com.png";
import backgroundNext from "./CityItinerariesComponentImages/pngguru2.com.png";
import Axios from 'axios';
import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteItinerariesComponent from "../FavoriteItinerariesComponent/FavoriteItinerariesComponent";
import { Button } from "react-bootstrap"

class CityItinerariesComponent extends Component {

  constructor(props) {

    super(props);

    this.state = {
      itineraries: [],
      cityData: [],
      newComment: '',
      itineraryCommented: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.changeFavourites = this.changeFavourites.bind(this);
  }

  async componentDidMount() {

    var name = this.props.match.params.city_name

    await Axios.get(`/api/itineraries/${name}`)
      .then(response => this.setState({ itineraries: response.data.itinerariesForACity, cityData: this.props.city }))
      .catch(error => console.log(error))

  }

  handleChange(event) {

    this.setState({ itineraryCommented: event.target.id, newComment: event.target.value })

  }

  async handleSubmit(event) {

    event.preventDefault();

    await Axios.put(`/api/itineraries/${this.props.city_name}`, this.state)
      .then(response => this.setState({ itineraries: response.data.itinerariesForACity }))
      .catch(error => console.log(error))

    document.getElementById(this.state.itineraryCommented).value = ''

  }

  async deleteComment(event) {

    var keyComment = event.target.value[0]
    var newValue = event.target.value.slice(1, event.target.value.length).split("/")
    var commentTitle = newValue[0]
    var oldComment = newValue[1]

    Axios.post(`/api/itineraries/del/${this.props.city_name}`, {
      key: keyComment,
      comment: oldComment,
      title: commentTitle
    })
      .then(response => this.setState({ itineraries: response.data.itinerariesForACity }))
      .catch(error => console.log(error))

  }

  async changeFavourites(itinerary, fav) {

    if (fav === true) {

      await Axios.put(`/api/itineraries/favon/${this.props.city_name}`, {
        title: itinerary.title,
        user: this.props.user.username
      })

    }

    if (fav === false) {

      await Axios.put(`/api/itineraries/favoff/${this.props.city_name}`, {
        title: itinerary.title,
        user: this.props.user.username
      })

    }

  }

  render() {

    var cityData = this.state.cityData
    var itineraries = this.state.itineraries

    if (this.state.cityData.length === 0) { return null }

    return (
      <div className={"container2"}>
        {cityData && itineraries ? (
          <div className={"container2"}>
            <div className={"col-md-12 col-sm-12"}>
              <img src={cityData.image} alt="" />
              <span className={"inside"}>
                {cityData.name.toUpperCase()}
              </span>
            </div>
            {itineraries &&
              cityData &&
              itineraries.length !== 0 ? (
                <div className={"margTop"}>
                  <h2>
                    Available MYtineraries
                  <br />
                  </h2>
                  <div className={"div col-lg-12 col-md-12 col-sm-12"}>
                    {itineraries.map(
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

                                  {< FavoriteItinerariesComponent
                                    itinerary={item} user={this.props.user} onClick={this.changeFavourites} />}

                                  <div className={"container2 flexContCol"}>
                                    <img
                                      className={"profile"}
                                      src={item.userPhoto}
                                      alt=""
                                    />
                                    <div>{item.username}</div>
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

                                    {item.hashtags.map((hashtags, i) => (
                                      <div key={i} className={"hashLinks"}>
                                        <a href="-">{hashtags}&nbsp;</a>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className={"container2 flexContLeft"}></div>
                          </div>

                          {/* ACÁ EMPIEZA EL BOTÓN DE VER MÁS PARA VER LAS ACTIVITIES DE CADA ITINERARIO */}
                          <div>
                            <button
                              className="navbar-toggler btn fullToggle"
                              type="button"
                              data-toggle="collapse"
                              data-target={"#navbarSupportedContent" + i}
                              aria-controls={"navbarSupportedContent" + i}
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              View All Activities
                          <br />
                            </button>

                            <div
                              className="collapse navbar-collapse"
                              id={"navbarSupportedContent" + i}
                            >
                              <div
                                id={"carouselExampleControls" + i}
                                className="carousel slide"
                                data-ride="carousel"
                              >
                                <div className="carousel-inner">
                                  {item.activities.map((item, i) =>
                                    i === 0 ? (
                                      <div key={i} className="carousel-item active">
                                        <div className={"flexContCar"}>
                                          <div className={"bold"}>{item.Name}</div>
                                          <div className={"fullToggle2"}>
                                            {item.Comments}
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                        <div key={i} className="carousel-item">
                                          <div className={"flexContCar"}>
                                            <div className={"bold"}>{item.Name}</div>
                                            <div className={"fullToggle2"}>
                                              {item.Comments}
                                            </div>
                                          </div>
                                        </div>
                                      )
                                  )}
                                </div>
                                <a
                                  className="carousel-control-prev"
                                  href={"#carouselExampleControls" + i}
                                  role="button"
                                  data-slide="prev"
                                >
                                  <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                    style={{
                                      height: "30px",
                                      width: "30px",
                                      backgroundImage: `url(${backgroundPrev})`,
                                      marginLeft: "70px"
                                    }}
                                  ></span>
                                  <span className="sr-only">Previous</span>
                                </a>
                                <a
                                  className="carousel-control-next"
                                  href={"#carouselExampleControls" + i}
                                  role="button"
                                  data-slide="next"
                                >
                                  <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                    style={{
                                      height: "30px",
                                      width: "30px",
                                      backgroundImage: `url(${backgroundNext})`,
                                      marginRight: "70px"
                                    }}
                                  ></span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </div>
                              <br />
                            </div>
                          </div>
                          <div className={"comments"}>
                            <span className={"labLeft"}><b><i>Comments</i></b></span>


                            <ul style={{ listStyle: "none" }}>  {item.comments.map((comment, i) => {
                              return (
                                <div key={i}>

                                  <li>{comment}</li>
                                  <Button variant="danger" onClick={this.deleteComment} value={i + item.title + "/" + comment}>Delete</Button>

                                </div>)
                            })}
                            </ul>


                            <form onSubmit={this.handleSubmit}>
                              <label className="align-content-lg-end">
                                <input

                                  id={item.title}
                                  onChange={this.handleChange}
                                  className={"inp"}
                                  type="text"
                                  placeholder="Your Comment..."
                                />
                              </label>
                              <Button size="sm" variant="outline-success" type="submit" value="Submit">Send comment</Button>
                            </form>                          </div>

                          {/* en el div de arriba termina el componente */}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <h1>There are no itineraries available
                  {/* There are no itineraries available for&nbsp;
                {cityData.singleCityFromRoutes[0].name}. Would you like to&nbsp;
                <span className={"blue"}>
                    <Link to={"/itineraries/add"}>add one?</Link>
                  </span> */}
                </h1>
              )}
          </div>
        ) : (
            <div className="flexCont">
              <img className="loading4" src={gif} alt="" />
            </div>
          )}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  if (state.singleCityReducer) {
    return {
      user: state.userReducer,
      city_name: ownProps.match.params.city_name,
      city: state.singleCityReducer.singleCity.singleCityFromRoutes[0],
    };
  }

};


export default connect(
  mapStateToProps
)(CityItinerariesComponent);
