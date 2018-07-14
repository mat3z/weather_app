import React from 'react';
import { Link } from 'react-router-dom';

const FavouriteCitiesList = () => {
  let cities = localStorage['favouriteCities']
    ? JSON.parse(localStorage['favouriteCities'])
    : [];

  const citiesList = cities.map((city, index) => (
    <li key={index} style={{listStyleType: 'none', padding: '15px 0'}}>
      <Link to='/weather_app/search/' style={{ textDecoration: 'none' }}>{ city }</Link>
    </li>
));

return (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', fontSize: '2.5em'}}>
    List of your favourite cities:
    {citiesList}
  </div>
)
};

export default FavouriteCitiesList;