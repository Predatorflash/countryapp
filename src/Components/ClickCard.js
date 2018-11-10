import React, { Component } from "react";
import axios from "axios";
import { countryjson } from "./countryjson";
import Showinfocard from "./Showinfocard";

class ClickCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardstate: "",
      mount: false
    };
  }

  componentDidMount = () => {
    this.setState({ mount: true });
    console.log(this.state.mount);
    const mycode = () => {
      let countrycodecalc = null;
      countrycodecalc = countryjson.filter(value => {
        if (value.name.toLowerCase() === this.props.countryname.toLowerCase())
          return true;
        return false;
      });
      console.log("bfore", countrycodecalc);
      if (countrycodecalc[0]) return countrycodecalc[0].code;
      return null;
    };
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${mycode()}`)
      .then(res => {
        if (this.state.mount)
          this.setState({
            cardstate: res.data
          });
      })
      .catch(err => console.log("i am failed", err));
  };
  componentWillUnmount = () => {
    this.setState({ mount: false });
  };
  render() {
    return (
      <div onClick={this.props.backtohomeclick}>
        <h1 className="display-4">{this.props.countryname} :</h1>
        {this.state.cardstate != null ? (
          <Showinfocard detail={this.state.cardstate} />
        ) : null}
      </div>
    );
  }
}

export default ClickCard;
