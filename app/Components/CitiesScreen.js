import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button, View, Image } from 'react-native'

class CitiesScreen extends React.Component {
    static navigationOptions = {
        title: ' ',
        
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Ciudades:</Text> 
                <View>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoSolo: {
        height: 80,
        width: 80,
        },
});
export default CitiesScreen;
