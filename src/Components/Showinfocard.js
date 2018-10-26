import React, { Component } from "react";
class ShowinfoCard extends Component {
  info = this.props.detail.data;
  componentDidMount = () => {
    if (this.info != null) console.log("i amd ", Object.keys(this.info));
    else console.log("i amd not ");
  };

  render() {
    return (
      <div>
        <div>
          <h1>CountryCode : </h1>
        </div>
      </div>
    );
  }
}

export default ShowinfoCard;
