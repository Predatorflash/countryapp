import React, { Component } from "react";
import CountryCard from "./Countrycard";
class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const renderr = this.props.filteredcountriesprop.map((value, i) => {
      return <CountryCard key={i} name={value.name} countrycode={value.code} />;
    });
    return renderr;
  }
}

export default CountryList;
