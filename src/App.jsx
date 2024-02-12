import useCountriesData from "./hooks/useCountriesData";
const App = () => {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags";
  const { countriesData, loading, error } = useCountriesData(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(countriesData);

  return <div>Check the console for data.</div>;
};

export default App;
