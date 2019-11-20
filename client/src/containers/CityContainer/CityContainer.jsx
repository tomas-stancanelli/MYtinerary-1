import React, { Component } from "react";
import CityComponent from "../../components/CityComponent/CityComponent";
import { getTheSingleCity } from '../../store/action-creators/singleCityActions'
import { connect } from "react-redux";

class CityContainer extends Component {

  async componentDidMount() {
    await this.props.getSingleCity(this.props.city_name)
    this.setState({data: this.props})
  }

  render() {
    return (
      <div>
        <CityComponent singleCity={this.props.singleCity.singleCityReducer.singleCity} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city_name: ownProps.match.params.id,
    singleCity: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleCity: (cityName) => dispatch(getTheSingleCity(cityName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityContainer);

