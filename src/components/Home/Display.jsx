import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { Button, Icon } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayMedicine() {
  const [medicines, setMedicines] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const api = `https://genericmedicinesapi.herokuapp.com/api/medicines/`;
    axios
      .get(api)
      .then((res) => {
        const medicines = res["data"]["objects"];
        setMedicines(medicines);
        console.log(medicines);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table className="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Original MRP</th>
            <th>Generic MRP</th>
            <th>Quantity</th>
            <th>Count</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicines, index) => (
            <tr key={index}>
              <td>{medicines.name}</td>
              <td>{medicines.mrp_rate}</td>
              <td>{medicines.generic_rate}</td>
              <td>{medicines.number_in_stock}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
              </td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button color="facebook" size="massive" animated="vertical">
        <Button.Content hidden>Cart</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    </div>
  );
}
export default DisplayMedicine;
