//A simple navigation bar.
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
 return (
  <nav className="navbar">
   <Link to="/">Sana's Recipe Finder</Link>
   <Link to="/search">Search</Link>
  </nav>
 );
};
export default Navbar;
