import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View, StatusBar } from 'react-native';
import Hamburguer from './Hamburguer';
import Profile from './Profile';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
<<<<<<< HEAD
import LogOut from './LogOut';
import ItineraryScreen from './ItineraryScreen';
import CityCarousel from './CityCarousel';
import UserItinLikeScreen from './UserItinLikeScreen';

//>>>>>>> c52d2a62b8cd63927b1db487fb3c326c410ccd74

//<Image source={require('./assets/2388994522.png')} style={{width:40, height:40}}/>
=======
import ActivityCarousel from './ActivityCarousel'
import User from "./User"
import ItineraryScreen from './ItineraryScreen';
import CityCarousel from './CityCarousel';
>>>>>>> 13200ccc90fe3b9f97ca578e85cedf128480abe4

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
// <<<<<<<< HEAD
//=======
    CreateAccount:{ screen: CreateAccountScreen },
    ActivityCarousel:{ screen: ActivityCarousel },
    Itinerary: {screen: ItineraryScreen},
    CityCarousel: {screen: CityCarousel}

//>>>>>>> c52d2a62b8cd63927b1db487fb3c326c410ccd74
 }
,  {
    defaultNavigationOptions : ({navigation}) => ({
    header:     (
        <View>
<<<<<<< HEAD
        <View style={{height: StatusBar.currentHeight, backgroundColor: 'red'}}></View>
        <View style={{height: StatusBar.currentHeight, flexDirection:'row' , justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red'}}>
            <Profile navigation={navigation} />        
            <Hamburguer navigation={navigation} />
        </View>
        </View>
         )
=======
        <View style={{height: StatusBar.currentHeight * 1.2,  backgroundColor: '#ef3b36'}}></View>
        <View style={{height: StatusBar.currentHeight, flexDirection:'row' , justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#ef3b36'}}>
            <Profile navigation={navigation} />        
            <Hamburguer navigation={navigation} />
        </View>
        </View> )
>>>>>>> 13200ccc90fe3b9f97ca578e85cedf128480abe4
    })
});

export default AppNavigator;