import { FETCH_ALL_CITIES } from '../constants';

const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CITIES: {
            return Object.assign({}, state, { citiesArray: action.cities })
        }
        default: return state
    }
}