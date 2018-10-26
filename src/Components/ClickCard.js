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
    let countrycodecalc = countryjson.filter(value => {
      if (value.name.toLowerCase() === this.props.countryname.toLowerCase())
        return true;
    });
    console.log(
      "i  am in mycode",
      countryjson,
      "asdas",
      this.props.countryname,
      "asdasd00",
      countrycodecalc[0]
    );

    return countrycodecalc[0].code;
  };
  componentDidMount = () => {
    axios
      .get(`http://restcountries.eu/rest/v2/alpha/${this.mycode()}`)
      .then(res => {
        console.log("I am inside axios", res.data);
        this.setState({
          cardstate: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>{this.props.countryname} :</h1>
        {this.state.cardstate != null ? (
          <Showinfocard detail={this.state.cardstate} />
        ) : null}
      </div>
    );
  }
}

export default ClickCard;
