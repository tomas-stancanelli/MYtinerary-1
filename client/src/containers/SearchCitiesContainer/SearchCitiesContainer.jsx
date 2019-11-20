import React, { Component } from "react";
import SearchCitiesComponent from "../../components/SearchCitiesComponent/SearchCitiesComponent";
import { connect } from "react-redux";
import { getAllTheCities } from "../../store/action-creators/cityActions";

class SearchCitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [],
      citiesFilter: [],
      citiesArray: [],
      cityNotFound: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterCities = this.filterCities.bind(this);
  }

  async handleChange(e) {
    e.preventDefault();
    await this.setState({ inputValue: e.target.value });
    this.filterCities();
  }

  async componentWillMount() {
    await this.props.getAllCities();
    this.setState({
      data: this.props.ciudades.citiesReducer.citiesArray,
      citiesFilter: this.props.ciudades.citiesReducer.citiesArray
    });
  }

  // componentWillMount() {
  //   this.getData();
  // }

  // async getData() {
  //   await fetch("/api/cities")
  //     .then(response => response.json())
  //     .then(data => this.setState({ data: data, citiesFilter: data }));
  // }

  //FALTA TRAER LA DATA DE REDUX AL STATE PARA HACER ANDAR EL FILTRO, VOLVER UN TOQUE ATRAS. REFACTOREAR EL FILTRO

  filterCities() {
    if (this.state.data && this.state.inputValue !== "") {
      let citiesArray = this.state.citiesFilter.ciudadesFromRoutes.filter(
        ciudad =>
          this.state.inputValue.toLowerCase() ===
          ciudad.name.toLowerCase().slice(0, this.state.inputValue.length)
      );
      this.setState({ data: { ciudadesFromRoutes: citiesArray } });
      
      this.setState({ cityNotFound: citiesArray.length === 0 })
      
      // let len = this.state.inputValue.length;
      // let cityName = ciudad.name.toLowerCase();
      // console.log("soy citiname", cityName.slice(0, len))
      // console.log("soy input", this.state.inputValue)
      // if (
      //   this.state.inputValue.toLowerCase() === cityName.slice(0, len)
      // ) {
      //   console.log("coincide")
      //   citiesArray.push(ciudad);
      //   this.setState({ data: { ciudadesFromRoutes: citiesArray } });

      // } else if() {
      //   console.log("falseeeee")
      //   this.setState({ cityNotFound: true})
      //   //this.setState({ data: this.props.ciudades.citiesReducer.citiesArray })
      // }
    } else {
      this.setState({ data: this.props.ciudades.citiesReducer.citiesArray, cityNotFound: false }); //SETSTATE PARA VOLVER AL PRINCIPIO
    }
  }

  render() {
    return (
      <div>
        <SearchCitiesComponent
          data={this.state.data} // NO TENGO QUE PASARLE ESTA DATA, TENGO QUE METERLA EN EL STATE
          cityNotFound={this.state.cityNotFound}
          cityFilter={this.state.cityFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ciudades: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCities: () => dispatch(getAllTheCities())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCitiesContainer);
