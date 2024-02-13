import React, { useState } from "react";

const CountryDesc = ({ country }) => {
  const {
    name,
    tld,
    cca2,
    cca3,
    ccn3,
    independent,
    status,
    unMember,
    currencies,
    capital,
    altSpellings,
    region,
    subregion,
    languages,
    translations,
    latlng,
    landlocked,
    area,
    demonyms: {
      eng: { f: demoFemale, m: demoMale },
    },
    flag,
    maps,
    population,
    car,
    timezones,
    continents,
    flags,
    coatOfArms: { png: coatOfArms },
    startOfWeek,
    capitalInfo: { latlng: capitalCoordinates },
  } = country;

  return (
    <div className="card">
      {flag ? (
        <>
          <img className="flag" src={flags.png} alt={`flag-${name.common}`} />
          <h2>{name.common}</h2>
        </>
      ) : (
        <>
          <h2>{name.common}</h2>
          <img className="flag" src={flags.png} alt={`flag-${name.common}`} />
        </>
      )}

      <div>
        <strong>Official Name:</strong> {name.official}
      </div>
      <div>
        <strong>Native Name:</strong>{" "}
        {Object.values(name.nativeName).map((nativeName, index) => (
          <span key={index}>
            {nativeName.official} ({nativeName.common})
            {index < Object.values(name.nativeName).length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <div>
        <strong>Top-level domain:</strong> {tld.join(", ")}
      </div>
      <div>
        <strong>Alpha-2 code:</strong> {cca2}
      </div>
      <div>
        <strong>Alpha-3 code:</strong> {cca3}
      </div>
      <div>
        <strong>Country Code:</strong> {ccn3}
      </div>
      <div>
        <strong>Independent:</strong> {independent ? "Yes" : "No"}
      </div>
      <div>
        <strong>Status:</strong> {status}
      </div>
      <div>
        <strong>UN member:</strong> {unMember ? "Yes" : "No"}
      </div>
      {Object.entries(currencies).map(([currencyCode, currencyValue]) => (
        <div key={currencyCode}>
          <strong>{currencyCode}:</strong> {currencyValue.name} (
          {currencyValue.symbol})
        </div>
      ))}
      <div>
        <strong>Capital:</strong> {capital.join(", ")}
      </div>
      <div>
        <strong>Alternative Spellings:</strong> {altSpellings.join(", ")}
      </div>
      <div>
        <strong>Region:</strong> {region}
      </div>
      <div>
        <strong>Subregion:</strong> {subregion}
      </div>
      <div>
        <strong>Demonym Female:</strong> {demoFemale}
      </div>
      <div>
        <strong>Demonym Male:</strong> {demoMale}
      </div>
      <div>
        <strong>Landlocked:</strong> {landlocked ? "Yes" : "No"}
      </div>
      <div>
        <strong>Area:</strong> {area} km&sup2;
      </div>
    </div>
  );
};

export default CountryDesc;
