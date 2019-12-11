import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Button } from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')} />
                {/* <Button
                    title="Go Home"
                    onPress={() => navigate('Home')} /> */}

                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="gray"
                    style={styles.input} />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.colortextbutton}>LOGIN</Text>

                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightgrey',
        padding: 20
        // justifyContent: 'center'


    },
    input: {

        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'lightgrey',

        color: 'black'
    },
    button: {
        backgroundColor: '#3399FF',
        // borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        height: 20,
        width: 60,
        justifyContent: 'center',
        alignSelf: 'center'
        // marginBottom: 10
    },
    colortextbutton: {
        color: 'white'
    },
    imgLogo: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50
    }
});