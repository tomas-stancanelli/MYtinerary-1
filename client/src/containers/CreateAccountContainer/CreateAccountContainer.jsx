import React, { Component } from 'react'
import CreateAccountComponent from '../../components/CreateAccountComponent/CreateAccountComponent'
import axios from "axios"

export default class CreateAccountContainer extends Component {

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

        if (event.target.name === "username") {
            this.setState({ username: event.target.value });
        }

        if (event.target.name === "password") {
            this.setState({ password: event.target.value });
        }

        if (event.target.name === "email") {
            this.setState({ email: event.target.value });
        }

        if (event.target.name === "firstname") {
            this.setState({ firstname: event.target.value });
        }

        if (event.target.name === "lastname") {
            this.setState({ lastname: event.target.value });
        }

        if (event.target.name === "country") {
            this.setState({ country: event.target.value });
        }


        if (event.target.name === "image") {
            this.setState({ image: event.target.value });
        }


    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/users/adduser/', this.state)
            .then(res => {
                if (res.data === 'x') {
                    alert("ERROR: The email you entered already has an associated account");
                } else {
                    alert("Your account has been successfully created!");
                    axios.post('/api/users/login/', this.state)
                        .then(res => {
                            if (res.data === 'x') {
                                alert("ERROR: your data appear to be wrong, enter your email and password again");
                            } else {
                                alert("You have been successfully logged in!");
                            }
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <CreateAccountComponent
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
