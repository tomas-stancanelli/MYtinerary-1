 import { LOG_IN_USER } from '../constants'

 const initialState = {
    username: "",
    image: "",
    token: ""
 }

 export default (state = initialState, action) => {
    switch (action.type) {
         case "LOG_IN_USER": {
             return {...state,
                token: action.user.data.token,
                image: action.user.data.image,
                username: action.user.data.username
            }
         }
         default: return state
     }
 }