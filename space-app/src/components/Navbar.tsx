import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import iconImage from '../../public/img/planet(1).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const NavbarComponent = () => {
    return (
        <NavBarElement>
            <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <Image src={iconImage} alt="Icon" width="45" height="45" style={{ marginLeft: '20px' }} roundedCircle />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <StyledNav>
                <StyledNavLink href="#home">Home</StyledNavLink>
                <StyledNavLink href="#features">Features</StyledNavLink>
                <StyledNavLink href="#pricing">Pricing</StyledNavLink>
                </StyledNav>
            </Navbar.Collapse>
        </Navbar>
        </NavBarElement>
        
    );
}


const NavBarElement = styled(Navbar)`
    background-color: transparent;
   .navbar {
    background-color: transparent;
    margin-left: 100px;
   }
`;

const StyledNav = styled(Nav)`
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
`;

const StyledNavLink = styled(Nav.Link)`
    margin: 0 100px 0 50px;
    color: white;
    font-size: 1.75rem;
    
    &:hover,
    &:focus,
    &:active {
        color: #c61515 !important;
    }
    
    &:not(:active) {
        color: white;
    }

    &:focus {
    outline: none;
  }
`

// const StyledImage = styled(Image)`
//   padding-left: 30px; 
// `;


export default NavbarComponent;