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
  mycode = () => {
    const countrycodecalc = countryjson.filter(value => {
      return value.name
        .toLowerCase()
        .includes(this.props.countryname.toLowerCase());
    });
    console.log("i  am in mycode", countryjson, "asdas", countrycodecalc[0]);
    return countrycodecalc[0].code;
  };
  componentDidMount = () => {
    axios
      .get(`http://restcountries.eu/rest/v2/alpha/${this.mycode()}`)
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
