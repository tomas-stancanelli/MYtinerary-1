import React, { Component } from "react";
import ActivitiesComponent from "../../components/ActivitiesComponent/ActivitiesComponent";
import { getItinerariesForACity } from "../../store/action-creators/itinerariesActions";
import { connect } from "react-redux";

class ActivitiesContainer extends Component {
  async componentDidMount() {
    await this.props.getItineraries(this.props.city_name);
  }

  render() {
      console.log("PROPS", this.props)
    return (
      <div>
        <ActivitiesComponent
        //   city_name={this.props.city_name}
        //   itineraries={this.props.itineraries}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // city_name: ownProps.match.params.city_name,
    // itineraries: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItineraries: cityName => dispatch(getItinerariesForACity(cityName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesContainer);
