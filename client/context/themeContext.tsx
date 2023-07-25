import { createContext, useCallback, useContext, useEffect, useState } from "react";
import extractFromCookie from "utils/extractFromCookie";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  onChangeTheme: () => void;
  isThemeLoaded: boolean;
}

const ThemeContext = createContext<ContextProps>({
  theme: "light",
  onChangeTheme: () => {},
  isThemeLoaded: false,
});

export const ThemeContainer = ({ children }: { children: React.ReactElement }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const changeThemeOnDocument = useCallback((nextTheme: ThemeType) => {
    document.body.dataset.theme = nextTheme;
    document.cookie = `theme=${nextTheme}; path=/`;
  }, []);

  const onChangeTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    changeThemeOnDocument(nextTheme);
  }, [changeThemeOnDocument, theme]);

  useEffect(() => {
    // NOTE: for synchronize cookie and theme state
    const cookieTheme = (extractFromCookie(document.cookie, "theme") || "dark") as ThemeType;
    setTheme(cookieTheme);
    changeThemeOnDocument(cookieTheme);
    setIsThemeLoaded(true);
  }, [changeThemeOnDocument]);

  return <ThemeContext.Provider value={{ theme, onChangeTheme, isThemeLoaded }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
