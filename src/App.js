import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import Countrylist from "./Components/CountryList";
import "./Components/country.css";
import { countryjson } from "./Components/countryjson";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchstate: "",
      countrylist: { countryjson }
    };
  }
  searchprop = event => {
    console.log(this.state.searchstate);
    this.setState({ searchstate: event.target.value });
    console.log(this.state.countrylist);
  };
  render() {
    const filteredcountries = this.state.countrylist.countryjson.filter(
      countr => {
        return countr.name
          .toLowerCase()
          .includes(this.state.searchstate.toLowerCase());
      }
    );

    return (
      <div>
        <header>
          <h1 className="display-4 bold">Search Countries </h1>
          <hr />
        </header>
        <div>
          <Searchbar searchfield={this.searchprop} />
        </div>
        <br />
        <div className="centrr">
          {console.log(filteredcountries)}
          <Countrylist filteredcountriesprop={filteredcountries} />
        </div>
      </div>
    );
  }
}

export default App;
