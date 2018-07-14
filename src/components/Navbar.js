import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  backgroundColor: '#bdc3c7'
};

const linkStyle = {
  textDecoration: 'none',
  padding: '20px',
  color: '#34495e',
  fontSize: '1.5em'
};

const Navbar = () => (
  <div style={{ ...navStyle }}>
    <Link to='/weather_app/' style={{...linkStyle}}>EUROPEAN CAPITALS</Link>
    <Link to='/weather_app/search/' style={{...linkStyle}}>SEARCH YOUR CITY</Link>
    <Link to='/weather_app/favourites/' style={{...linkStyle}}>FAVOURITE PLACES</Link>
    <Link to='/weather_app/current/' style={{...linkStyle}}>CURRENT LOCATION</Link>
  </div>
);

export default Navbar;
