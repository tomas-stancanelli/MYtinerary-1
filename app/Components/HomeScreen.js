import React from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView,TouchableOpacity,AsyncStorage} from 'react-native';
import CityCarousel from './CityCarousel';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '#teamwork',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.contieneLogo}>
                <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo.png')} />
                </View>
                <View style={styles.texto1}>
                    <Text>
                        Find your perfect trip,
                    </Text>
                    <Text>
                        designed by insiders who know and love their cities.
                    </Text>
                </View>
                <TouchableOpacity style={styles.flechita} onPress={() => navigate('Cities')}>
                    <Image source={require('../assets/img/circled-right-2.png')} />
                </TouchableOpacity>
                <CityCarousel navigate={navigate}/>
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
    imgLogo: {
        height: 160,
        width: 380,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',

    },
    imgHome: {
        justifyContent: 'flex-end',
        paddingTop: 40,    
    },
    texto1: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',   
    },
});

export default HomeScreen;