import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const listItemStyle = {
  fontSize: '2.5em',
  padding: '15px 0'
};

const searchBarStyle = {
  width: '300px',
  height: '30px',
  textAlign: 'center',
  fontSize: '2em',
  padding: '15px',
  fontFamily: 'Montserrat, sans-serif',
  color: '#34495e',
  border: '1px solid black',
  borderRadius: '3px'
};

const buttonStyle = {
  backgroundColor: '#bdc3c7',
  fontSize: '2em',
  padding: '15px',
  fontFamily: 'Montserrat, sans-serif',
  color: '#34495e',
  outline: 'none',
  border: '1px solid black',
  borderRadius: '3px',
  width: '150px'
};

class CitiesListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      cities: ['London', 'Paris', 'Madrid', 'Warsaw', 'Rome', 'Vienna', 'Oslo', 'Stockholm', 'Helsinki', 'Budapest'],
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleAddToFavourites = this.handleAddToFavourites.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    })
  }

  handleSort(e) {
    this.setState(prevState => prevState.cities.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    }))
  }

  handleAddToFavourites(e) {
    console.log(e.target.getAttribute('name'));

    let cities = localStorage['favouriteCities']
      ? JSON.parse(localStorage['favouriteCities'])
      : [];

    if (!cities.includes(e.target.getAttribute('name'))) {
      cities.push(e.target.getAttribute('name'));
    }
    let JSONcities = JSON.stringify(cities);
    localStorage.setItem('favouriteCities', JSONcities);
  }

  render() {
    const citiesList = this.state.cities
      .filter(city => this.state.query === '' ? true : city.toLowerCase().includes(this.state.query.toLowerCase()))
      .map((city, index) => (
        <li
          key={index}
          style={{ ...listItemStyle }}
        >
          <Link to='/weather_app/search/' style={{ textDecoration: 'none' }}>{ city }</Link>
          <button
            style={{ border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: '1em'}}
            name={city}
            onClick={this.handleAddToFavourites}
          >
            <i className="far fa-heart" name={city}></i>
          </button>
        </li>
      ));

    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{margin: '50px'}}>
          <input
            type="text"
            onChange={this.handleChange}
            style={{ ...searchBarStyle }}
          />
        </div>
        <div>
          <button
            style={{ ...buttonStyle }}
            onClick={this.handleSort}
          >
            Sort
          </button>
        </div>
        <div style={{}}>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', padding: '0' }}>
            { citiesList }
          </ul>
        </div>
      </div>
    )
  }
}

export default CitiesListContainer;