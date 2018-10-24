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
    console.log(this.state.countrylist.countryjson);
    console.log(this.filteredcountries);
  };
  render() {
    const filteredcountries = this.state.countrylist.countryjson.filter(
      countr => {
        return countr.name.includes(this.state.searchstate);
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
          <Countrylist requiredlist={filteredcountries} />
        </div>
      </div>
    );
  }
}

export default App;
