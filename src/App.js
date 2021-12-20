import { useState, useEffect, useRef } from 'react';
import CardCountries from './components/CardCountries';

import './App.css';

function App() {

  const [getAllCountries, setGetAllCountries] = useState([])

  const [querySearch, setQuerySearch] = useState('all')

  const valueSearch = useRef()

  function search(event) {
    event.preventDefault()
    console.log(valueSearch.current.value)
    setQuerySearch('/name/' + valueSearch.current.value)
  }

  function allCountries() {
    setQuerySearch('all')
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/' + querySearch)
      .then(response => response.json())
      .then(data => setGetAllCountries(data))
      .catch(err => { throw new Error(err) })
  }, [querySearch])

  return (
    <div className="App">

      <h1>List of all Countries</h1>
      <button type="submit" onClick={allCountries}>Get all countries</button>

      <form>
        <input type="text" ref={valueSearch} placeholder="Search a country"></input>
        <button type="submit" onClick={search}>Search</button>
      </form>

      <CardCountries data={getAllCountries} />

    </div>
  );
}

export default App;
