import Toogle from "./Toggle";
import { Link } from "react-router-dom";
const Header = ({ isDark, setIsDark }) => {
  return (
    <header className="header__" data-theme={isDark ? "dark" : "light"}>
      <h1>
        <Link to="/rest-countries-api">Where in the world?</Link>
      </h1>
      <Toogle isDark={isDark} setIsDark={setIsDark} />
    </header>
  );
};

export default Header;
