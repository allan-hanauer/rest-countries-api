import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, isFetching } = useQuery(
    "Countries",
    async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags"
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(data);
  console.log(isFetching);
  return (
    <ul>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        data.map((elem, index) => (
          <li key={elem.name.common}>
            <Link to={`${elem.name.official}`}>{elem.name.common}</Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Home;
