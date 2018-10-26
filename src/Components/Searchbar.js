import React, { Component } from "react";
class Searchbar extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className="form-control"
          onChange={this.props.searchfield}
          placeholder="Search here"
        />
        <br />
      </div>
    );
  }
}

export default Searchbar;
