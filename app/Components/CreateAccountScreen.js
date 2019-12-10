import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image, Button } from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

class CreateAccountScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Account',
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
                    placeholder="Username"
                    placeholderTextColor="gray"
                    style={styles.input} />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={styles.input} />
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor="gray"
                    style={styles.input} />
                    <TextInput
                    placeholder="First Name"
                    placeholderTextColor="gray"
                    style={styles.input} />
                    <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="gray"
                    style={styles.input} />
                    <TextInput
                    placeholder="Country"
                    placeholderTextColor="gray"
                    style={styles.input} />
                    <TextInput
                    placeholder="Profile Photo URL"
                    placeholderTextColor="gray"
                    style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text>Submit</Text>

                </TouchableOpacity>
            </View>
        );
    }
}

export default CreateAccountScreen;

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
        // backgroundColor: '#00bfff',
        height: 40,
        // width: 60,
        justifyContent: 'center',
        alignSelf: 'center',

        marginBottom: 20
    },
    imgLogo: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50
    }
});