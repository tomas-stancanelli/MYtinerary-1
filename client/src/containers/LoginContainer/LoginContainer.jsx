import React, { Component } from 'react'
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import axios from "axios"

export default class LoginContainer extends Component {

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
        e.preventDefault()
        axios.post('/api/users/login/', this.state)
            .then(res => {
                if (res.data === 'x') {
                    alert("ERROR: your data appear to be wrong, enter your email and password again");
                } else {
                
                    alert("You have been successfully logged in!");
                    console.log("LOGIN CONTAINER", this.state)
                    localStorage.setItem('name', this.state.username);
                    console.log("LOGIN CONTAINER", localStorage.getItem('name'))
                    // user = axios.get()
                }
            })
            .catch(error => console.log(error))
    }

    responseGoogle = (response) => {
        
        this.setState({
            username: response.profileObj.name,
            image: response.profileObj.imageUrl, 
            email: response.profileObj.email,
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            isGoogle: true
        })

        if(!response.error) {  
            alert("Log in successful!")
        }

        axios.post('/api/users/adduser/', this.state)

//        localStorage.setItem('name', response.profileObj.givenName);
    
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
