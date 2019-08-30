import { Link } from "react-scroll"
import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";

import Logo from '../../assets/img/logo.png'
import './Header.css'

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="black" dark expand="lg" fixed="top" scrolling transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <Link className="ml-5"
              id="logo"
              to="main"
              spy={true}
              smooth={true}
              offset={-50}>
              <img src={Logo} alt="Logo" id="logo" />
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="mr-5">
            <MDBNavbarNav right>
              <MDBNavItem >
                <Link
                  className="nav-link"
                  id="nav-item"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onClick={this.toggleCollapse}>
                  INÍCIO
                  </Link>
              </MDBNavItem>
              <MDBNavItem >
                <Link
                  className="nav-link"
                  id="nav-item"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onClick={this.toggleCollapse}>
                  A ARTISTA
                  </Link>
              </MDBNavItem>
              <MDBNavItem >
                <Link
                  className="nav-link"
                  id="nav-item"
                  to="galery"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onClick={this.toggleCollapse}>
                  OBRAS
                  </Link>
              </MDBNavItem>
              <MDBNavItem >
                <Link
                  className="nav-link"
                  id="nav-item"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onClick={this.toggleCollapse}>
                  CONTATO
                  </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;