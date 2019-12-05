import { FETCH_ITINERARIES_FOR_A_CITY } from '../constants'
// import { PUT_ITINERARY_COMMENT } from '../constants'
// import Axios from 'axios';

const fetchItinerariesForACity = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_FOR_A_CITY,
        itineraries: itineraries
    }
};

// const putItineraryComment = (itineraries) => {
//     return {
//         type: PUT_ITINERARY_COMMENT,
//         itineraries: itineraries
//     }
// }

// export const sendItineraryComment = (city_name) => dispatch => {
//     return Axios.post(`/api/itineraries/${city_name}`)
//         .then(response => response.json())
//         .then(response => dispatch(putItineraryComment(response)))
//         .catch(err => console.log(err))
// }

export const getItinerariesForACity = (city_name) => dispatch => {
    return fetch(`/api/itineraries/${city_name}`, { method: 'GET' })
        .then(response => response.json())
        .then(response => dispatch(fetchItinerariesForACity(response)))
        .catch(err => console.log(err))
}