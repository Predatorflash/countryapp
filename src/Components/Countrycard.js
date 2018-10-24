import React, { Component } from "react";

class CountryCard extends Component {
  render() {
    return (
      <div>
        <div className="bg-light-blue dib br3 pa3 ma1 grow bw4 shadow-5">
          <h1> {this.props.name}</h1>
          <div className="tc">
            <img
              src={`https://www.countryflags.io/${
                this.props.countrycode
              }/shiny/64.png`}
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
