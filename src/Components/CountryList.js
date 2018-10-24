import React, { Component } from "react";
import CountryCard from "./Countrycard";
class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const renderr = this.props.requiredlist.map((value, i) => {
      return <CountryCard key={i} />;
    });
    return renderr;
   // return <CountryCard />;
  }
}

export default CountryList;
