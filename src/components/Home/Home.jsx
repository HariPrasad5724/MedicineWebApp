import React, { Component } from "react";
import { getMedicines } from "../../services/fakeMedicineService";
import "./Home.css";
import { Button, Icon } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
class Medicines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: getMedicines(),
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div>
          <table className="center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Original MRP</th>
                <th>Generic MRP</th>
                <th>Quantity</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {this.state.medicines.map((medicines) => (
                <tr>
                  <td>{medicines.name}</td>
                  <td>{medicines.company}</td>
                  <td>{medicines.originalMRP}</td>
                  <td>{medicines.genericMRP}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      onClick={this.IncrementItem}
                    >
                      +
                    </button>{" "}
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={this.DecreaseItem}
                    >
                      -
                    </button>{" "}
                  </td>
                  <td>{this.state.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br></br>
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
