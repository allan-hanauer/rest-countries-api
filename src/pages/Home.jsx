import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import CountryContainer from "../components/CountryContainer";

const Home = () => {
  const { data, isFetching, error } = useQuery(
    "Countries",
    async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital"
      );
      const countries = response.data;
      // Ordenar os países em ordem alfabética
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      return countries;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("-");
  const [showAll, setShowAll] = useState(true);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const handleChangeSearch = (value) => {
    setSearchText(value);
    filterAndSortData(value, selectedRegion);
  };

  const handleChangeRegion = (value) => {
    setSelectedRegion(value);
    filterAndSortData(searchText, value);
  };

  const filterAndSortData = (searchText, region) => {
    let filtered = [...data];

    if (region !== "-") {
      filtered = filtered.filter((country) => country.region === region);
    }

    if (searchText) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    filtered.sort((a, b) => a.name.common.localeCompare(b.name.common));

    setFilteredData(filtered);
    setShowAll(false);
  };

  return (
    <>
      <div className="container__search">
        <input
          type="text"
          className="input"
          placeholder="Search for a country..."
          value={searchText}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />
        <label htmlFor="select">
          <select
            value={selectedRegion}
            onChange={(e) => handleChangeRegion(e.target.value)}
            name="select"
            id="select"
          >
            <option value="-">Filter by Region</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </div>
      <div className="container__countries">
        {(showAll ? data : filteredData).map((elem) => (
          <CountryContainer
            key={elem.name.common}
            name={elem.name.common}
            flag={elem.flags.png}
            capital={elem.capital}
            population={elem.population}
            region={elem.region}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
