import React from 'react';
import { Text, Button } from 'react-native'

class CitiesScreen extends React.Component {
    static navigationOptions = {
        title: 'Cities',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <Button 
          title="Go to Home"
          onPress={() => navigate('Home')}/>
        )
    }
}

export default CitiesScreen;