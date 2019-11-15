import React, { Component } from "react";
import CityComponent from "../../components/CityComponent/CityComponent";

export default class CityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      singleCity: ""
    };
    this.getData = this.getData.bind(this);
    this.getCityData = this.getCityData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getCityData();
  }

  async getData() {
    await fetch("/api/cities")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  async getCityData() {
    await this.getData();
    this.state.data.ciudades.filter(ciudad => {
      if (ciudad.title == this.props.match.params.id) {
        this.setState({ singleCity: ciudad });
      }
    });
  }

  render() {
    return (
      <div>
        <CityComponent singleCity={this.state.singleCity} />
      </div>
    );
  }
}
