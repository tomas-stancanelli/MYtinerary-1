import React from 'react';
<<<<<<< HEAD
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';
=======
import axios from 'axios'
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Comentarios from './Comentarios'
import ImageWithName from './ImageWithName'
import { connect } from "react-redux";
>>>>>>> 13200ccc90fe3b9f97ca578e85cedf128480abe4

class ItineraryScreen extends React.Component {

    constructor(props) {
        super();

        this.props = props;

        this.state = {
            city: this.props.navigation.state.params.city,
            itineraries: [],
            fav: "red",
            type: "heart"
        }
    }
    


    async componentDidMount() {
        var city_name = this.state.city.name;
        const data = await axios.get(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/${city_name}`)
        this.setState({ itineraries: data.data.itinerariesForACity })
    }

    checkFavourites(itinerary) {

        if (!itinerary.favouriteUsers || !this.props.user) {
            return "black"
        }

        for (var i = 0; i < itinerary.favouriteUsers.length; i++) {

            if (itinerary.favouriteUsers[i] === this.props.user.username)
                return "red"
        }

        return "black"

    }

    async changeFavourites(itinerary, fav) {

        var city_name = this.state.city.name;

        if (fav === true) {

            const data = await axios.put(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/favon/${city_name}`, {
                title: itinerary.title,
                user: this.props.user.username
            })

            this.setState({ itineraries: data.data.itinerariesForACity })
        }

        if (fav === false) {

            const data = await axios.put(`https://mytinerary-grupo2.herokuapp.com/api/itineraries/favoff/${city_name}`, {
                title: itinerary.title,
                user: this.props.user.username
            })

            this.setState({ itineraries: data.data.itinerariesForACity })

        }

    }


    render = () => {
<<<<<<< HEAD
        const { navigate } = this.props.navigation;
        return (
            <View>
            <Text>{this.state.city.name}</Text>
                <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
  }
  const styles = StyleSheet.create({
    logoSolo: {
        height: 80,
        width: 80,
    },
    imgHome: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: "105%",
    },
});
=======

        return (

            <ScrollView>
                <View style={{ flex: 1, width: '90%' }}>

                    <ImageWithName city={this.state.city} width={"100%"} navigate={this.props.navigate} />

                    {this.state.itineraries.length != 0 ?

                        this.state.itineraries.map((user, i) => {

                            return <ListItem key={i}

                                title={user.username}
                                subtitle={

                                    <View>
                                        <Text>{user.country}</Text>
                                        <Text>{user.city}</Text>
                                        <Text>{user.title}</Text>
                                        <Text>{user.rating}</Text>
                                        <Text>{user.duration}</Text>
                                        <Text>{user.price}</Text>
                                        <Text>{user.hashtags}</Text>


                                    </View>
                                }

                                leftAvatar={{ source: { uri: user.userPhoto } }}


                                rightAvatar={
                                    <TouchableHighlight

                                        onPress={
                                            () => {

                                                if (this.checkFavourites(user) === "black") {
                                                    this.changeFavourites(user, true)
                                                } else {
                                                    this.changeFavourites(user, false)
                                                }

                                            }} >
                                        <AntDesign name="heart" size={30} color={this.checkFavourites(user)} />
                                    </TouchableHighlight>

                                }

                                // Component={Comentarios}
                                bottomDivider

                            />

                        }
                        )

                        :

                        <Text>No itineraries available for this city</Text>

                    }

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps)(ItineraryScreen);
>>>>>>> 13200ccc90fe3b9f97ca578e85cedf128480abe4
