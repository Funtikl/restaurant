import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Animated from 'react-animated-css';
//styles
import styles from './main.module.css';

//modules



class Header extends Component {
  render() {
    return (

      <Nav className={styles.navEl} >
<NavLink className={styles.navItems} href="#">About</NavLink> 
        <NavLink className={styles.navItems} href="#">Menu</NavLink>
         <NavLink className={styles.navItems} href="#">Gallery</NavLink> 
         <NavLink  className={styles.navItems} href="#">Contacts</NavLink>

      </Nav>

    );
  }
}


export default Header;
