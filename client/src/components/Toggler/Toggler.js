import { createContext, useState, useEffect } from "react";
import lofigirl2 from "../../Assets/lofigirl.gif"
// import "./Toggler.css"
const themes = {
  dark: {
    img: {lofigirl2}
  },
  light: {
    backgroundColor: "white",
    color: "blue",
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