import { LOG_IN_USER } from '../constants'
import Axios from 'axios';

const logInUser = (user) => {
    return {
        type: "LOG_IN_USER",
        user: user
    }
};

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