import React from "react";
import { Form, Icon, Image, Input, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo1 from "../../assets/images/logo2.jpg";
import {getMedicine} from '../../services/fakeMedicineService';
export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo1} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Input
                  placeholder="Search Medicine"
                  size="small"
                  action="Go"
                  value={this.state.query}
                  onChange={this.onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon className="header-icon" name="chat" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="alarm" size="large" />
            </Menu.Item>
            <Menu.Item name="avatar">
              <Icon className="header-icon" name="user secret" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
    
  }
  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    <div><h1>{getMedicine(this.state.query)}</h1></div>
  };
}
export default HeaderNav;
