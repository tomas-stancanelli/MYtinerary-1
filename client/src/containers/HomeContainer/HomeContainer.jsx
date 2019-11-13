import React, { Component } from 'react'
import HomeComponent from '../../components/HomeComponent/HomeComponent'
import cities from '../../assets/cities'

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <HomeComponent
                cities={cities}
                />                
            </div>
        )
    }
}
