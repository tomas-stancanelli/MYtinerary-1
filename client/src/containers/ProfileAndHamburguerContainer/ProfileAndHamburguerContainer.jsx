import React, { Component } from 'react';
import ProfileAndHamburguerComponent from '../../components/ProfileAndHamburguerComponent/ProfileAndHamburguerComponent';
import { connect } from "react-redux";
import { reloadLogIn } from "../../store/action-creators/userActions";

class ProfileAndHamburguerContainer extends Component {

    constructor(props) {

        super(props)

        this.state = {
            show: false
        };

        this.changeShow = this.changeShow.bind(this)
    };

    componentDidMount() {
        if (localStorage.getItem('token') && !this.props.token) {
            this.props.reloadLogInNow();
        }
    }

    changeShow() {
        this.state.show ? this.setState({ show: false }) : this.setState({ show: true })
    }

    render() {
        return (
            <div>
                <ProfileAndHamburguerComponent
                    show={this.state.show}
                    changeShow={this.changeShow}
                    username={this.props.user}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reloadLogInNow: () => dispatch(reloadLogIn())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAndHamburguerContainer);