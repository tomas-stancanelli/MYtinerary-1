import { LOGGED_USER } from '../constants'

const loggedUser = (user) => {
    return {
        type: LOGGED_USER,
        user: user
    }
};

