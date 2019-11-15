import React, { Component } from "react";
import SearchCitiesComponent from "../../components/SearchCitiesComponent/SearchCitiesComponent";

export default class SearchCitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [],
      citiesFilter: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterCities = this.filterCities.bind(this);
    this.getData = this.getData.bind(this);
  }

  async handleChange(e) {
    e.preventDefault();
    await this.setState({ inputValue: e.target.value });
    this.filterCities();
  }

  componentWillMount() {
    this.getData();
  }

  async getData() {
    await fetch("/api/cities")
      .then(response => response.json())
      .then(data => this.setState({ data: data, citiesFilter: data }));
  }

  filterCities() {
    if (this.state.data.ciudades && this.state.inputValue !== "") {
      let citiesArray = [];
      this.state.citiesFilter.ciudades.filter(ciudad => {
        let len = this.state.inputValue.length;
        let cityName = ciudad.name.toLowerCase();
        if (
          this.state.inputValue.toLowerCase() === cityName.slice(0, len)
        ) {
          citiesArray.push(ciudad);
          this.setState({ data: { ciudades: citiesArray } });
        }
      });
    } else {
      this.getData();
    }
  }

  render() {
    return (
      <div>
        <SearchCitiesComponent
          data={this.state.data}
          cityFilter={this.state.cityFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
