import React, { Component } from 'react'
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { connect } from "react-redux";
import { logUser } from "../../store/action-creators/userActions";

class LoginContainer extends Component {

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        if (event.target.name === "email") {
            this.setState({ email: event.target.value });
        }

        if (event.target.name === "password") {
            this.setState({ password: event.target.value });
        }

    }

    handleSubmit(e) {

        if(e) {
            e.preventDefault()
        }

        this.props.logUserNow(this.state)
            .then((data) => {

                if (data === false) {

                    alert("You are successfully logged!");
                    this.props.history.push("/index");

                } else {

                    alert("Incorrect username or password")
                }
            })
            .catch(error => console.log(error));
    }

    responseGoogle = async (response) => {
       
        await this.setState({
            username: response.profileObj.name,
            image: response.profileObj.imageUrl,
            email: response.profileObj.email,
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            isGoogle: true
        })

        this.handleSubmit()

    }

    render() {

        return (
            <div>
                <LoginComponent
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    responseGoogle={this.responseGoogle}
                />

            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
