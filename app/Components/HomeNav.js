import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View ,Text,StatusBar } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile";
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import ActivityCarousel from './ActivityCarousel'
import UserItinLikeScreen from './UserItinLikeScreen';


//<Image source={require('./assets/2388994522.png')} style={{width:40, height:40}}/>

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
    CreateAccount:{ screen: CreateAccountScreen },
    ActivityCarousel:{ screen: ActivityCarousel }
 }
,  {
    defaultNavigationOptions : ({navigation}) => ({
    header:     (
            <View style={{paddingBottom: 0, height: '12%', flexDirection:'row' , justifyContent: 'space-between', alignItems: 'flex-end', top: 10, backgroundColor: '#ef3b36'}}>
            <Profile navigation={navigation} />        
            <Hamburguer navigation={navigation} />
    </View> )
    })
 } 

);

export default AppNavigator;