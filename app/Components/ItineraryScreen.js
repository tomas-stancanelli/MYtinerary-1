import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

export default class ItineraryScreen extends React.Component {
    constructor(props){
      super();
  
      this.props = props;

      this.state = {
          city: this.props.navigation.state.params.city
      }
    }
  
    render = () => {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <Text>{this.state.city.name}</Text>
                <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
  }
  const styles = StyleSheet.create({
    logoSolo: {
        height: 80,
        width: 80,
    },
    imgHome: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: "105%",
    },
});