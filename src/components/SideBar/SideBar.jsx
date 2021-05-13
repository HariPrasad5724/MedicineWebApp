import React from "react";
import SideBarItem from "./SideBarItem/SideBarItem";
import { Menu, Divider } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./SideBar.scss";
import { SideBarHeader } from "./SideBarHeader/SideBarHeader";
import { SideBarFooter } from "./SideBarFooter/SideBarFooter";
export function SideBar() {
  const history = useHistory();
  function handleListing() {
    history.push("/ListMedicine");
  }
  function handleHome() {
    history.push("/");
  }
  return (
    <div>
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <div onClick={handleHome}>
          <SideBarItem label="Home" icon="hospital" />
        </div>
        <div onClick={handleListing}>
          <SideBarItem label="List Medicine" icon="home" />
        </div>
        <div onClick={handleListing}>
          <SideBarItem label="Store List" icon="hospital" />
        </div>
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
export default SideBar;
