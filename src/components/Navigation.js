import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>My React Blog</NavbarBrand>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/blog'>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>About me</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}