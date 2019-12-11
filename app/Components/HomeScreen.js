import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button, View, Image } from 'react-native';
import CityCarousel from './CityCarousel.js';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '#teamwork',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
          <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')}/>
          <TouchableOpacity onPress={() => navigate('Cities')}>
            <Image source={require('../assets/img/circled-right-2.png')}/>
          </TouchableOpacity>
          <CityCarousel/>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      },
    imgLogo: {
       marginTop: 80
      }});
export default HomeScreen;