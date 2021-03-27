import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";
import { SideBarHeader } from "./SideBarHeader/SideBarHeader";
import { SideBarFooter } from "./SideBarFooter/SideBarFooter";
export class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Menu borderless vertical stackable fixed="left" className="side-nav">
          <SideBarItem label="List Medicine" icon="home" />
          <SideBarItem label="Store List" icon="hospital" />
          <SideBarItem label="Search Medicine" icon="medkit" />
          <Divider />
          <SideBarHeader title="Your History" />
          <SideBarItem label="Feedback" icon="comments" />
          <SideBarItem label="Notification" icon="bell" />
          <SideBarItem label="Your Orders" icon="binoculars" />
          <SideBarItem label="Quality Assurance" icon="shield" />
          <Divider />
          <SideBarHeader title="Any Queries?" />
          <SideBarItem label="About us" icon="flag" />
          <SideBarItem label="Help" icon="help circle" />
          <SideBarItem label="Rate App" icon="comment" />
          <Divider />
          <SideBarFooter />
        </Menu>
      </div>
    );
  }
}
export default SideBar;
