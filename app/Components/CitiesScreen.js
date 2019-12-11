import React from 'react';
import { Text, Button,Image ,StyleSheet} from 'react-native'

class CitiesScreen extends React.Component {
    static navigationOptions = {
        title: ' ',
        
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

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
        },
        text: {
          color: "red",
        }
  });*/