import React from 'react';
import { Text, Button, View } from 'react-native'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
          <Button 
          title="Go to Cities"
          onPress={() => navigate('Cities')}/>
          <Button 
          title="Go to Login"
          onPress={() => navigate('Login')}/>
          </View>
        )
    }
}

export default HomeScreen;