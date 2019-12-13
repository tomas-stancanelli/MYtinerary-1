import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button, View, Image } from 'react-native'

class CitiesScreen extends React.Component {
    static navigationOptions = {
        title: 'Cities',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')}/>
                </TouchableOpacity>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    height: "100%",
    width: "100%"
    },
    imgHome: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    logoSolo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 80,
    width: 80,
    }
});
export default CitiesScreen;










