function CardCountries(props) {
  return (
    <div className="flex flex-row flex-wrap gap-20 justify-center p-4">
      {props.data.map((element, index) => (
        <div
          key={index}
          className="rounded bg-slate-200 dark:bg-slate-800 w-72 shadow-lg"
        >
          <img
            src={element.flags.png}
            alt={element.name.official}
            className="rounded-t w-full h-44"
          ></img>
          <ul className="text-left p-6">
            <li>
              <span className="text-lg font-bold">{element.name.official}</span>
            </li>
            <li>
              <span className="font-bold">Population:</span>
              {element.name.population}
            </li>
            <li>
              <span className="font-bold">Continent:</span> {element.continents}
            </li>
            <li>
              <span className="font-bold">Capital:</span> {element.capital}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CardCountries;
