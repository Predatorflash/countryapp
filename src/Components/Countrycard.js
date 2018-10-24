import React, { Component } from "react";
import logo from "./logo.svg";
class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="bg-light-blue dib br3 pa3 ma1 grow bw4 shadow-5">
          <h1> country</h1>
          <img src={logo} alt="img" />
        </div>
      </div>
    );
  }
}

export default CountryCard;
