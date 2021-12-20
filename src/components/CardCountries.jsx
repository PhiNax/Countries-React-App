function CardCountries(props) {
  return (
    <div className="card__container">
      <div>
        <p>CARD</p>
        {props.data.map((element, index) => (
          <section key={index}>
            <li>{element.name.official}</li>
            <li>{element.capital}</li>
            <li>{element.continents}</li>
            <img src={element.flags.png} alt={element.name.official}></img>
          </section>
        ))}
      </div>
    </div>
  );
}

export default CardCountries;
