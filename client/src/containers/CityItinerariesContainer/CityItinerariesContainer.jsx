// import React, { Component } from "react";
// import CityItinerariesComponent from "../../components/CityItinerariesComponent/CityItinerariesComponent";
// import { getItinerariesForACity } from "../../store/action-creators/itinerariesActions";
// import { connect } from "react-redux";
// import Axios from 'axios';

// class CityItinerariesContainer extends Component {

//   constructor(props) {

//     super(props);

//     this.state = {
//       itinerary: '',
//       comment: '',
//       isSubmitted: false
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

  // async UNSAFE_componentWillMount() {
  //   await this.props.getItineraries(this.props.city_name);
  // }

//   handleChange(event) {

//     this.setState({ itinerary: event.target.id, comment: event.target.value })

//   }

//   async handleSubmit(event) {

//     event.preventDefault();

//     await Axios.put(`/api/itineraries/${this.props.city_name}`, this.state)
//       .then(response => console.log(response))
//       .catch(error => console.log(error))

//     this.setState({ isSubmitted: true })

//   }

//   render() {
//     return (
//       <div>
//         {console.log("DID MOUNT", this.props.itineraries)}
//         <CityItinerariesComponent
//           city_name={this.props.city_name}
//           itinerariess={this.props.itineraries}
//           cityData={this.props.itineraries.singleCityReducer.singleCity}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//         />
//       </div>
//     );
//   }
// }

// export default CityItinerariesContainer

// const mapStateToProps = (state, ownProps) => {
//   return {
//     city_name: ownProps.match.params.city_name,
//     itineraries: state
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getItineraries: cityName => dispatch(getItinerariesForACity(cityName))
//     //    putComments: 
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CityItinerariesContainer);

// {"_id":
// {"$oid":"5de7eaf81c9d440000e984d0"},
// "hashtags":["#Picasso","#Gotico ","#Els4Gats"],
// "activities":[
//   {"Name":"Picasso Museum","Adress":"Carrer Montcada, 15-23, 08003 Barcelona","Photo":"Picasso-Museum-Barcelona.jpg","Time":{"$numberInt":"2.5"},"Cost":{"$numberDouble":"12"},"Comments":"\"The Museo Picasso houses one of the most extensive collections of artworks by the 20th-century Spanish artist Pablo Picasso. With 4,251 works exhibited by the painter, the museum has one of the most complete permanent collections of works.  Highlights of the collection include two of his first major works, The First Communion (1896), and Science and Charity (1897). In particular, the Museu Picasso reveals Picasso's relationship with the city of Barcelona, a relationship that was shaped in his youth and adolescence and continued until his death.  An unmissible event for anyone visiting this beautiful and extraordinary city.\""},
// {"Name":"Walk through the Gothic Quarter","Adress":"\"The Gothic Quarter Barri Gotic Barcelona\"","Photo":"gothic-quarter.jpg","Time":{"$numberInt":"0.5"},"Cost":{"$numberInt":"0"},"Comments":"\"As you walk out of El Borne from the Picasso Museum and slowly make your way through the rustic streets of the Gothic quarter, you feel the history resonating from it's narrow lanes.   This quarter encompasses the oldest parts of the city of Barcelona, and includes the remains of the city's Roman wall and several notable medieval landmarks. Much of the present-day fabric of the quarter, however, dates to the 19th and early 20th centuries.\""},{"Name":"Lunch at Els Quatre Gats","Adress":"Carrer de Montsió, 3, 08002 Barcelona","Photo":"els-4gats.jpg","Time":{"$numberInt":"1"},"Cost":{"$numberInt":"20"},"Comments":"\"Take your time to feel the weight of this historical treasure, you are walking on the same floors that many historical art figures once walked.  The cafe became a famously popular meeting place for famous artists throughout the modernist period in Catalonia, known as Modernisme. The café opened on June 12, 1897 in the famous Casa Martí, and served as a hostel, bar and cabaret until it eventually became a central meeting point for Barcelona’s most prominent modernist figures, such as Pablo Picasso and Ramon Casas i Carbó.\""}],
// "title":"Pablo Picasso in 4 Hours",
// "city":"Barcelona","country":"Spain",
// "username":"LiveforArt71",
// "userPhoto":"https://i.imgur.com/7m2aJzn.png",
// "rating":"4.9",
// "duration":{"$numberInt":"4"},
// "price":"",
// "comments":[""]}

// {"_id":{"$oid":"5ddc18ae814afb43b8793b20"},"hashtags":["#Architecture","#Budapest","#MYtin"],"activities":[{"Name":"Shoes on the Danube Bank","Adress":"Budapest, Id. Antall József rkp., 1054 Hungary","Photo":"shoes-on-the-danube-bank.jpg","Time":{"$numberDouble":"0.5"},"Cost":"free","Comments":"Waterside shoe sculptures memorializing those killed at the river by a fascist party during WWII."},{"Name":"Hungarian Parliament Building","Adress":"Budapest, Kossuth Lajos tér 1-3, 1055 Hungary","Photo":"hungarian-parliament-building.jpg","Time":{"$numberInt":"2"},"Cost":{"$numberDouble":"7.4"},"Comments":"Landmark Gothic Revival–style edifice with lavishly decorated rooms, plus a visitors' center."},{"Name":"Iguana Bar & Grill","Adress":"Budapest, Zoltán u. 16, 1054 Hungary","Photo":"no-photo.png","Time":{"$numberDouble":"1.5"},"Cost":{"$numberInt":"10"},"Comments":"Enchiladas, burritos & tequila menu in high-ceilinged restaurant, with colourful Mexican poster art."}],"title":"Along Antall Jozsef","city":"Budapest","country":"Hungary","username":"HungarianGirl21","userPhoto":"https://i.imgur.com/dI2ueSB.png","rating":{"$numberDouble":"3.67"},"duration":{"$numberInt":"4"},"price":"$$","__v":{"$numberInt":"5"},"comments":["","ppppppppppppppppp","me gustó mucho","hola","a ver ce","hola"]}