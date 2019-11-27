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
            country: ''
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

    async handleSubmit() {
        // Axios.post('/api/users/adduser/', this.state)
        // .then(res => {
        //     console.log("aver")
        //     console.log(res)
        //     if (res.data === 'x') {
        //         alert("ERROR: The email you entered already has an associated account");
        //         return true
        //     } else {
        //         alert("Your account has been successfully created!");
        //         return false
        //     }
        // })
        // .catch(error => console.log(error))  
        console.log(this.state);
        
        const resp = await axios.post('/api/users/adduser/', this.state)
        .then((resp)=>{
            console.log('resp Axios', resp);

        });
        
        const data = resp.data
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
