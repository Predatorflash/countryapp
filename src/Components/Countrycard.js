import React, { Component } from "react";

class CountryCard extends Component {
  render() {
    return (
      <div>
        <div
          className="bg-light-blue dib br3 pa3 ma1 grow bw4 shadow-5 "
          onClick={this.props.clickable}
          id={this.props.name}
        >
          <h1 className="centrr" id={this.props.name}>
            {" "}
            {this.props.name}
          </h1>
          <div className="tc" id={this.props.countrycode}>
            <img
              src={`https://www.countryflags.io/${
                this.props.countrycode
              }/shiny/64.png`}
              alt="img"
              id={this.props.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryCard;
