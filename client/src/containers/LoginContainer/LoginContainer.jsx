import React, { Component } from 'react'
import LoginComponent from "../../components/LoginComponent/LoginComponent";

export default class LoginContainer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        //        this.handleSubtmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        if (event.target.name === "username") {
            this.setState({ username: event.target.value });
        }

        if (event.target.name === "password") {
            this.setState({ password: event.target.value });
        }

        console.log(this.state)

    }

    render() {
        return (
            <div>
                <LoginComponent
                    onChange={this.handleChange}
                    //onSubmit={this.handleSubmit}
                >

                </LoginComponent>
            </div>
        )
    }
}
