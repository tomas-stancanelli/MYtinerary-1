import React, { Component } from "react";
import fav_off from "../CityItinerariesComponent/CityItinerariesComponentImages/fav_off.jpg";
import fav_on from "../CityItinerariesComponent/CityItinerariesComponentImages/fav_on.svg";

const imagesPath = {
    on: fav_on,
    off: fav_off
}

class FavoriteItinerariesComponent extends Component {

    state = {
        open: false
    }

    toggleImage = () => {
        
        if (this.state.open === false) {
            this.props.onClick(this.props.itinerary, true)
            this.setState ({ open: true })
        
        } else {
            this.props.onClick(this.props.itinerary, false)
            this.setState ({ open: false })
        }
    
    }

    checkFavourites() {

        if (!this.props.itinerary.favouriteUsers || !this.props.user) {
            return
        }

        for (var i = 0; i < this.props.itinerary.favouriteUsers.length; i++) {

            if (this.props.itinerary.favouriteUsers[i] === this.props.user.username)
                this.setState({ open: true })
        }

        return 

    }

    componentDidMount() {
        this.checkFavourites();
    }

    getImageName = () => this.state.open ? 'on' : 'off'

    render() {

        const imageName = this.getImageName();

        return (
            <div>
                <img style={{ maxWidth: '50px' }}
                    src={imagesPath[imageName]}
                    onClick={this.toggleImage}
                />
            </div>
        );
    }
}

export default FavoriteItinerariesComponent;