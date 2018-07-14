import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configureStore } from './store';
import Navbar from './components/Navbar';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
    </Router>
  </Provider>
);

export default App;
