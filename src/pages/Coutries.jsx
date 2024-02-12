import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
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
  console.log(data);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data[0]?.name?.common}</h1>
    </div>
  );
};

export default Coutries;
