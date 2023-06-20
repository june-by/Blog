import { createContext, useCallback, useContext, useEffect, useState } from "react";
import extractFromCookie from "utils/extractFromCookie";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  onChangeTheme: () => void;
}

const ThemeContext = createContext<ContextProps>({ theme: "light", onChangeTheme: () => {} });

export const ThemeContainer = ({ children }: { children: React.ReactElement }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const onChangeTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    changeThemeOnDocument(nextTheme);
  }, [theme]);

  const changeThemeOnDocument = useCallback((nextTheme: ThemeType) => {
    document.body.dataset.theme = nextTheme;
    document.cookie = `theme=${nextTheme}; path=/`;
  }, []);

  useEffect(() => {
    // NOTE: for synchronize cookie and theme state
    const cookieTheme = (extractFromCookie(document.cookie, "theme") || "light") as ThemeType;
    setTheme(cookieTheme);
    changeThemeOnDocument(cookieTheme);
  }, []);

  return <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};