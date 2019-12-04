import React, { Component } from 'react'
import { connect } from "react-redux";
import { logOutUser } from "../../store/action-creators/userActions";

class LogOutContainer extends Component {

    componentDidMount(){

        this.props.logOutUserNow();
        this.props.history.push("/index");

    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logOutUserNow: () => dispatch(logOutUser())
    };
};

export default connect (null, mapDispatchToProps)(LogOutContainer);
