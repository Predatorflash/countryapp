import React, { Component } from "react";
class Searchbar extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className="form-control"
          onChange={this.props.searchfield}
        />
      </div>
    );
  }
}

export default Searchbar;
