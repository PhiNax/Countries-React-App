import "flowbite";

import NavBar from "./components/NavBar";
import CardCountries from "./components/CardCountries";

import "./App.css";

import { useState, useEffect, useRef } from "react";

function App() {
  const [getAllCountries, setGetAllCountries] = useState([]);

  const [querySearch, setQuerySearch] = useState("all");

  const valueSearch = useRef();

  function search(event) {
    event.preventDefault();
    setQuerySearch("name/" + valueSearch.current.value);
  }

  function allCountries() {
    setQuerySearch("all");
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/" + querySearch)
      .then(response => response.json())
      .then(data => setGetAllCountries(data))
      .catch(err => {
        throw new Error(err);
      });
  }, [querySearch]);

  return (
    <div className="container mx-auto  text-center text-base bg-white text-slate-800 dark:text-slate-200 dark:bg-slate-900">
      <NavBar />

      <button type="submit" onClick={allCountries}>
        Get all countries
      </button>

      <form className="container mx-auto">
        <input
          type="text"
          ref={valueSearch}
          placeholder="Search a country"
        ></input>
        <button type="submit" onClick={search}>
          Search
        </button>
      </form>

      <CardCountries data={getAllCountries} />
    </div>
  );
}

export default App;
