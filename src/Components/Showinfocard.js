import React, { Component } from "react";
class ShowinfoCard extends Component {
  render() {
    return (
      <div>
        <div className="tc">
          <h1>CountryCode :{this.props.detail.alpha2Code} </h1>
          <h1>Capital :{this.props.detail.capital} </h1>
          <h1>Population :{this.props.detail.population} </h1>
          <h1>Region :{this.props.detail.region} </h1>
          <h1>Currency :{console.log(this.props.detail.currencies)} </h1>
          <div className="tc">
            <div className="madd">
              <h1>Flag : </h1>
              <img
                className="pa2 br1S "
                src={this.props.detail.flag}
                alt="flag"
                height="100 px"
                width="100px"
              />
            </div>
          </div>
          <h1>CountryCode :{this.props.detail.alpha2Code} </h1>
        </div>
      </div>
    );
  }
}

export default ShowinfoCard;
