import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button, View, Image } from 'react-native'


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Puto el que lee',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
             <Button 
          title="Go to Login"
          onPress={() => navigate('Login')}/>
          <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')}/>
          <TouchableOpacity onPress={() => navigate('Cities')}>
          <Image source={require('../assets/img/circled-right-2.png')}/>
            </TouchableOpacity>
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