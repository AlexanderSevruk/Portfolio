import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./navmenu.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        width={"200px"}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        disableAutoFocus
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          <i className="fa fa-home" /> <span>Home</span>
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/skills"
        >
          <i className="fa fa-graduation-cap" /> Stack
        </Link>

        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/projects"
        >
          <i className="fa fa-trophy" /> Projects
        </Link>
      </Menu>
    );
  }
}

export default Nav;
