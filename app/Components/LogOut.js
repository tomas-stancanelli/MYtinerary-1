import React, { Component } from 'react'
import { View, Image } from 'react-native';

class LogOut extends React.Component {
    static navigationOptions = {
        title: 'LogOut',
    }
    
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
            <Image source={require('../assets/img/LogOut.png')} />
            </View>
        )

        
    }};

export default LogOut;