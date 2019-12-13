import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, Button } from 'react-native'
import { connect } from "react-redux";
import { logUser } from "../Store/Actions/userActions";

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            password: '',
            image: '',
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            isGoogle: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        this.props.logUserNow(this.state)
            .then((data) => {

                if (data === false) {

                    alert("You are successfully logged!");
                    //                    this.props.history.push("/index");

                } else {

                    alert("Incorrect username or password")
                }
            })
            .catch(error => console.log(error));
    }


    render() {

        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Image style={styles.imgLogo} source={require('../assets/img/MYtineraryLogo2.png')} />

                <TextInput
                    placeholder="Username or email"
                    placeholderTextColor="gray"
                    style={styles.input}
                    onChangeText={text => this.setState({ email: text})} />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={text => this.setState({ password: text})} />

                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.colortextbutton}>LOGIN</Text>
                </TouchableOpacity>
<<<<<<< HEAD
                <View>
                    <Image style={{height: 300, width: "100%", marginTop: 10}} source={{uri: 'https://media1.tenor.com/images/125764d70601094c243ce01333d2e147/tenor.gif?itemid=4983812'}}/>
                </View>
=======

>>>>>>> c52d2a62b8cd63927b1db487fb3c326c410ccd74
                <TouchableOpacity style={styles.imgHome} onPress={() => navigate('Home')}>
                    <Image style={styles.logoSolo} source={require('../assets/img/homeIcon.png')} />
                </TouchableOpacity>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logUserNow: user =>
            dispatch(logUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'lightgrey',
        padding: 20,
        // justifyContent: 'center'
        justifyContent: 'space-between'
    },
    logoSolo: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 80,
        width: 80,
    },
    imgHome: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: "105%",
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