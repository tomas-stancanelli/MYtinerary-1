import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View, StatusBar } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile";
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import LogOut from './LogOut';

//<Image source={require('./assets/2388994522.png')} style={{width:40, height:40}}/>

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
    CreateAccount:{ screen: CreateAccountScreen }, 
    LogOut: { screen: LogOut },
 }
,  {
    defaultNavigationOptions : ({navigation}) => ({
    header:     (
            <View style={{marginTop: StatusBar.currentHeight, height: StatusBar.currentHeight, flexDirection:'row' , justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ef3b36'}}>
            <Profile navigation={navigation} />        
            <Hamburguer navigation={navigation} />
    </View> )
    })
 } 

);

export default AppNavigator;