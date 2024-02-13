import img from "../assets/moon-outline.svg";
const Toogle = ({ setIsDark, isDark }) => {
  return (
    <button
      className="toggle-container"
      type="button"
      onClick={() => {
        setIsDark(!isDark);
        console.log(isDark);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon change-fill"
        viewBox="0 0 512 512"
      >
        <path
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>

      <span>Dark Mode</span>
    </button>
  );
};

export default Toogle;
