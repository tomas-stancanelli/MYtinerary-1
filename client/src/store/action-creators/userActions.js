import { LOG_IN_USER, LOG_OUT_USER, RELOAD_LOG_IN } from '../constants'
import Axios from 'axios';

const logInUser = (user) => {
    return {
        type: LOG_IN_USER,
        user: user
    }
};

export const reloadLogIn = () => {
    return {
        type: RELOAD_LOG_IN
    }
}

export const logOutUser = () => {
    return {
        type: LOG_OUT_USER
    }
}

export const logUser = (user) => dispatch => {

    return Axios.post('/api/users/login/', user)
        .then((user) => {

            if (user.data === 'x') {
                return true


            } else {

                dispatch(logInUser(user))
                return false
            
            }
        })

} 