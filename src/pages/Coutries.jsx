import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import CoutryDesc from "../components/CoutryDesc";
import Loading from "../components/Loading";

const Coutries = () => {
  const params = useParams();
  console.log(params.id);

  const { data, isFetching, error } = useQuery(
    "country",
    async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${params.id}`
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isFetching) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  console.log(data);
  console.log(data[0].flags.png);

  return (
    <div className="container-main">
      <div className="button_back">
        <Link className="link-home" to="/rest-countries-api">
          <span>home</span>
        </Link>
      </div>
      <CoutryDesc country={data[0]} />
    </div>
  );
};

export default Coutries;
