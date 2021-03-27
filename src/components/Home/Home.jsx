import React, { Component } from "react";
import { getMedicines } from "../../services/fakeMedicineService";
import "./Home.css";
class Movies extends Component {
  state = {
    medicines: getMedicines(),
  };
  render() {
    return (
      <div>
        <table className="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Original MRP</th>
              <th>Generic MRP</th>
              <th>Select!</th>
            </tr>
          </thead>
          <tbody>
            {this.state.medicines.map((medicines) => (
              <tr>
                <td>{medicines.id}</td>
                <td>{medicines.name}</td>
                <td>{medicines.company}</td>
                <td>{medicines.originalMRP}</td>
                <td>{medicines.genericMRP}</td>
                <td>
                  <button onClick="action.js">Add to cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Movies;
