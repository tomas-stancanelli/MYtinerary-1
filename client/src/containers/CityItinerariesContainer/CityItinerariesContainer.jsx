import React, { Component } from 'react'
import CityItinerariesComponent from '../../components/CityItinerariesComponent/CityItinerariesComponent'
import {getItinerariesForACity} from '../../store/action-creators/itinerariesActions'
import { connect } from "react-redux";

class CityItinerariesContainer extends Component {
    render() {
        return (
            <div>
                <CityItinerariesComponent/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    //   city_name: ownProps.match.params.id,
      itineraries: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getItineraries: (cityName) => dispatch(getItinerariesForACity(cityName))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CityItinerariesContainer);
  
