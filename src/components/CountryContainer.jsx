import { Link } from "react-router-dom";

const CountryContainer = ({ name, flag, population, capital, region }) => {
  function valueConvert(value) {
    return value.toLocaleString("en", { minimumFractionDigits: 2 });
  }

  return (
    <div className="container__country">
      <img className="flag" src={flag} alt={`flag-${name}`} />
      <div className="container__desc">
        <Link to={`/${name}`}>
          <h2>{name}</h2>
        </Link>
        <p>
          <span className="bold">Population: </span>
          {valueConvert(population)}
        </p>
        <p>{region}</p>
        <p>
          <span className="bold">Capital: </span>
          {capital[0]}
        </p>
      </div>
    </div>
  );
};

export default CountryContainer;
