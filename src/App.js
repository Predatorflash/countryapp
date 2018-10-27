import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import Countrylist from "./Components/CountryList";
import "./Components/country.css";
import { countryjson } from "./Components/countryjson";
import ClickCard from "./Components/ClickCard";
import Backtohome from "./Components/Backtohome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchstate: "",
      countrylist: { countryjson },
      clickstate: null
    };
  }
  searchprop = event => {
    this.setState({ searchstate: event.target.value });
  };
  clickable = event => {
    this.setState({ clickstate: event.target.id });
  };
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("indide error", error);
    return { clickstate: null };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log("inside cdc", error, info);
  }
  render() {
    const filteredcountries = this.state.countrylist.countryjson.filter(
      countr => {
        return countr.name
          .toLowerCase()
          .includes(this.state.searchstate.toLowerCase());
      }
    );

    const homeroute = () =>
      this.setState({
        clickstate: null,
        searchstate: ""
      });

    return (
      <div>
        {" "}
        {console.log("in render", this.state.clickstate)}
        <header>
          <h1 className="display-4 bold" onClick={homeroute}>
            Search Countries{" "}
          </h1>
          <hr />
        </header>
        <div>
          {this.state.clickstate === null ? (
            <div>
              <Searchbar searchfield={this.searchprop} />

              <div className="centrr">
                <Countrylist
                  filteredcountriesprop={filteredcountries}
                  clickable={this.clickable}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="endee pa2">
                <Backtohome backtohomeclick={homeroute} />
              </div>
              <ClickCard
                countryname={this.state.clickstate}
                backtohomeclick={homeroute}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
