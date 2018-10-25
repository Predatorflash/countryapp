import React, { Component } from "react";
import axios from "axios";
import { countryjson } from "./countryjson";
class ClickCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    axios
      .get(`http://restcountries.eu/rest/v2/alpha/${this.countrycode}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const countrycode = () => {
      "IN";
    };
    return (
      <h1>
        {this.props.countryname}
        {console.log(countrycode)}
      </h1>
    );
  }
}

export default ClickCard;
