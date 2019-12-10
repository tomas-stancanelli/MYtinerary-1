import React, { Component } from 'react'
import { Text, Button } from 'react-native'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <view>
          <Button 
          title="Go Home"
          onPress={() => navigate('Home')}/>
          </view>
        )
    }
}

export default LoginScreen;