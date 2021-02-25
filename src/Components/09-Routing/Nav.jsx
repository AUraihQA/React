import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link, } from 'react-router-dom';

const Navigation = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/shop">Product</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>




      {/* <p>List Based</p>
      <Nav color="dark" dark>
        <NavItem>
          <NavLink>
          <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
          <Link to="/about">About</Link>
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink>
          <Link to="/shop">Product</Link>
          </NavLink>
        </NavItem>
      </Nav>
    
    */}
      {/* <Link to="/" className="btn btn-danger">Home</Link>
            <Link to="/about" className="btn btn-outline-success">About</Link>
            <Link to="/shop" className="btn btn-outline-info">Product</Link> */}
    </>
  )
}
export default Navigation; 