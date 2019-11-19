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
    this.getCityData();
  }

  async getData() {
    await fetch("/api/cities")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  async getCityData() {
    await this.getData();
    if (!!this.state.data.ciudades) {
      for (let i = 0; i < this.state.data.ciudades.length; i++) {
        console.log("ASDASD", this.state.data.ciudades);
        if (this.state.data.ciudades[i].title === this.props.match.params.id) {
          await this.setState({ singleCity: this.state.data.ciudades[i] });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <CityComponent singleCity={this.state.singleCity} />
      </div>
    );
  }
}
