import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile";
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import User from "./User"
import UserItinLikeScreen from './UserItinLikeScreen';

//<Image source={require('./assets/2388994522.png')} style={{width:40, height:40}}/>

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
    CreateAccount:{ screen: CreateAccountScreen }, 
 }
,  {
    defaultNavigationOptions : ({navigation}) => ({
    header:     (
            <View style={{paddingBottom: 0, height: '12%', flexDirection:'row' , justifyContent: 'space-between', alignItems: 'flex-end', top: 10, backgroundColor: '#ef3b36'}}>
            <Profile navigation={navigation} />
            <User />        
            <Hamburguer navigation={navigation} />
    </View> )
    })
 } 

);

export default AppNavigator;