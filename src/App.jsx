import useLocalStorage from "use-local-storage";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="main__" data-theme={isDark ? "dark" : "light"}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
