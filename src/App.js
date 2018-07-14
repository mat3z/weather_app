import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from './store';
import Navbar from './components/Navbar';
import CitiesListContainer from './containers/CitiesListContainer';
import FavouriteCitiesList from './components/FavouriteCitiesList';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Navbar/>
        <Route
          path='/weather_app/search/'
          // component={}
        />
        <Route
          path='/weather_app/favourites/'
          component={FavouriteCitiesList}
        />
        <Route
          path='/weather_app/current/'
          // component={}
        />
        <Route
          exact path='/weather_app/'
          component={CitiesListContainer}
        />
      </div>
    </Router>
  </Provider>
);

export default App;
