import React, { Component } from 'react'
import CityComponent from '../../components/CityComponent/CityComponent'
import cities from '../../assets/cities'

export default class CityContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.match.params
          };
    }
    
    render() {
        return (
            <div>
                <CityComponent
                cities={cities}
                city={this.props.match.params}
                />                
            </div>
        )
    }
}
