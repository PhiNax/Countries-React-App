function CardCountries(props) {
  return (
    <div className="card__container">
      {props.data.map((element, index) => (
        <section key={index} className="card__item">
          <img
            src={element.flags.png}
            alt={element.name.official}
            className="card__image"
          ></img>
          <ul className="card__ul">
            <li>{element.name.official}</li>
            <li>{element.capital}</li>
            <li>{element.continents}</li>
          </ul>
        </section>
      ))}
    </div>
  );
}

export default CardCountries;
