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
  if (name.common == "Antarctica") {
    return (
      <div>
        <section className="main_card_country">
          <div className="flag-box">
            <img className="flag" src={flags.png} alt={`flag-${name.common}`} />
          </div>
          <div className="name-desc-country">
            <h2>{name.common}</h2>
            <div>
              <strong>Official Name:</strong> {name.official}
            </div>
            <div>
              <strong>Native Name:</strong>{" "}
            </div>
            <div className="desc-country">
              <div>
                <div>
                  <strong>Top-level domain:</strong>{" "}
                  {tld.join(", ") || undefined}
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
              </div>
              <div>
                <div>
                  <strong>Capital:</strong> {capital || undefined}
                </div>
                <div>
                  <strong>Alternative Spellings:</strong>{" "}
                  {altSpellings.join(", ")}
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
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <section className="main_card_country">
        <div className="flag-box">
          <img className="flag" src={flags.png} alt={`flag-${name.common}`} />
        </div>
        <div className="name-desc-country">
          <h2>{name.common}</h2>
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
          <div className="desc-country">
            <div>
              <div>
                <strong>Top-level domain:</strong> {tld.join(", ") || undefined}
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
            </div>
            <div>
              {Object.entries(currencies).map(
                ([currencyCode, currencyValue]) => (
                  <div key={currencyCode}>
                    <strong>{currencyCode}:</strong> {currencyValue.name} (
                    {currencyValue.symbol})
                  </div>
                )
              )}
              <div>
                <strong>Capital:</strong> {capital || undefined}
              </div>
              <div>
                <strong>Alternative Spellings:</strong>{" "}
                {altSpellings.join(", ")}
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
          </div>
        </div>
      </section>
    );
  }
};

export default CountryDesc;
