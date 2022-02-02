import { createContext, useState, useEffect } from "react";
import lofigirl2 from "../../Assets/lofigirl.gif"
import lofigirl from "../../Assets/lofiNight.gif"

// import "./Toggler.css"

const themes = {
  dark: {
    backgroundImage: `url(${lofigirl2})`,
    color: "black",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundPosition: "center",
  },
  light: {
    backgroundImage: `url(${lofigirl})`,
    color: "black",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundPosition: "center",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);
  console.log(isDark)

  return (
    <ThemeContext.Provider className="tester1" value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}