import React from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native';
import CityCarousel from './CityCarousel';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: ' ',
    };
    render() {
        const { navigate } = this.props.navigation;
        console.log("home:", this.props)
        return (
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')} />
                <TouchableOpacity onPress={() => navigate('Cities')}>
                    <Image source={require('../assets/img/circled-right-2.png')} />
                </TouchableOpacity>
                <CityCarousel />
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
    },
    imgLogo: {
        marginTop: 30
    }
});



export default HomeScreen;