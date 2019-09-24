import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import FilterLink from '../containers/filterLink';
import { Visibility_Filters } from '../actions';

export default function NavBar() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="">Todo App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <ul className="navbar-nav mr-auto">
      <FilterLink filter={Visibility_Filters.SHOW_ALL}>
          All
      </FilterLink>
      <FilterLink filter={Visibility_Filters.SHOW_ACTIVE}>
          Active
      </FilterLink>
      <FilterLink filter={Visibility_Filters.SHOW_COMPLETED}>
          Completed
      </FilterLink>
    </ul>
  </Navbar.Collapse>
</Navbar>
    )
}
