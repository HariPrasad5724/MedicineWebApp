import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { Button, Icon } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";

class Medicines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: "",
      count: 0,
    };
  }
  componentDidMount() {
    const api = `https://genericmedicinesapi.herokuapp.com/api/medicines/`;
    axios
      .get(api)
      .then((res) => {
        const medicines = res["data"]["objects"];
        this.setState({ medicines: medicines });
        console.log(medicines);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <br></br>
        {this.state.medicines.map((medicine, index) => (
          <div key={index}>
            <div>{medicine.name}</div>
            <div>{medicine.mrp_rate}</div>
            <div>{medicine.generic_rate}</div>
          </div>
        ))}
        <Button color="facebook" size="massive" animated="vertical">
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    );
  }

  IncrementItem = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  DecreaseItem = () => {
    this.setState({ count: this.state.count - 1 });
  };
}
export default Medicines;
