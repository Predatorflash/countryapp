import React, { Component } from "react";
import axios from "axios";
import { countryjson } from "./countryjson";
import Showinfocard from "./Showinfocard";

class ClickCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardstate: ""
    };
  }
  componentDidMount = () => {
    let a = 10,
      b = 15;
    const mycode = () => {
      const countrycodecalc = countryjson.filter(value => {
        if (value.name === this.props.countryname) return true;
      });
      console.log("i  am in mycode", countryjson, countrycodecalc);
      return countrycodecalc[0].code;
    };

    axios
      .get(`http://restcountries.eu/rest/v2/alpha/${mycode()}`)
      .then(res => {
        console.log("I am inside axios", res);
        this.setState({
          cardstate: res
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {" "}
        <h1>{this.props.countryname}</h1>
        <Showinfocard detail={this.state.cardstate} />
      </div>
    );
  }
}

export default ClickCard;
