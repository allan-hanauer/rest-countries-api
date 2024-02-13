import Toogle from "./Toggle";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className="header__" data-theme={isDark ? "dark" : "light"}>
      <h1>Where in the world?</h1>
      <Toogle isDark={isDark} setIsDark={setIsDark} />
    </header>
  );
};

export default Header;
