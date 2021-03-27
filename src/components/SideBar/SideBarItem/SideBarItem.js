import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import './SideBarItem.scss';
export class SideBarItem extends React.Component {
  render() {
    return (
      <Menu.Item className='sidebar-item'>
        <div className='sidebar-item-alignment-container'>
          <span><Icon size='large' name={this.props.icon}/> </span>
          <span>{this.props.label}</span>
        </div>
      </Menu.Item>
    );
  }
}

export default SideBarItem;