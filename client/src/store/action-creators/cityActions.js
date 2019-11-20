import { FETCH_ALL_CITIES } from '../constants';

const fetchAllCities = (cities) => {
    return {
        type: FETCH_ALL_CITIES,
        cities: cities
    }
};

//POR QUE NO ANDA CON UNA PROMESA MAS??????
export const getAllTheCities = () => dispatch => {
    return fetch("/api/cities", { method: 'GET' })
        .then(response => response.json())
        .then(response => //console.log("Soy response en el action", response))
            // .then(response => {
            dispatch(fetchAllCities(response))
            // dispatch({
            //     type: FETCH_ALL_CITIES,
            //     cities: response
            // })
            // }
        )
        .catch(err => console.log(err));
}

















// export const fetchAllUsers = () => dispatch => {
//     Axios.get(`api/users`)
//         .then(users => {
//             dispatch(allUser    s(users.data))})
// }











//   export const fetchProducts = (input, category, min, max, page) => dispatch => {
//     let Minuscula = input.toLowerCase()
//     Axios.get('/api/products/search/', {
//         // Asignamos el valor de userInfo a params
//         params: {
//             input: Minuscula,
//             min,
//             max,
//             category,
//             page
//         }
//     })  