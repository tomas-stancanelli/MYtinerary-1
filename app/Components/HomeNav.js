import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    CreateAccount:{ screen: CreateAccountScreen },
});

export default AppNavigator;