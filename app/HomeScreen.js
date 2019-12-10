import React from 'react';
import { Text, Button } from 'react-native'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: ' ',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <Button 
          title="Go to Cities"
          onPress={() => navigate('Cities')}/>
        )
    }
}

export default HomeScreen;