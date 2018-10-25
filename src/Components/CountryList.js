import React, { Component } from "react";
import CountryCard from "./Countrycard";
class CountryList extends Component {
  render() {
    const renderr = this.props.filteredcountriesprop.map((value, i) => {
      return (
        <CountryCard
          key={i}
          name={value.name}
          countrycode={value.code}
          clickable={this.props.clickable}
        />
      );
    });
    return renderr;
  }
}

export default CountryList;
