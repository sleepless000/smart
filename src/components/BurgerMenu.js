import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

class BurgerMenu extends React.Component {
  state = { menuOpen: false };

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <>
        <div className="logo" />
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link
            to="/dashboard"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            Dashboard
          </Link>

          <Link
            to="/new-user"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            New User
          </Link>

          <Link
            to="/photo-viewer"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            Photo Viewer
          </Link>
        </Menu>
      </>
    );
  }
}

export default BurgerMenu;
