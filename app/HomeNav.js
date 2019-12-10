import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile"
//<Image source={require('./assets/2388994522.png')} style={{width:40, height:40}}/>

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
},  {defaultNavigationOptions : {
    headerBackground: (
        <View style={{flex:1,  flexDirection:'row' , justifyContent: 'space-between', alignItems: 'center', top: 10, backgroundColor: '#ef3b36'}}>
            <Profile />
            <Hamburguer />
        </View>
    )}
} 

);

export default AppNavigator;