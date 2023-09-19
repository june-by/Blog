import DEFAULT_THEME from "constants/defaultTheme";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";
import extractFromCookie from "utils/extractFromCookie";

type ThemeType = "light" | "dark";

interface ContextProps {
  theme: ThemeType;
  handleChangeTheme: () => void;
  isThemeLoaded: boolean;
}

const ThemeContext = createContext<ContextProps>({
  theme: "light",
  handleChangeTheme: () => {},
  isThemeLoaded: false,
});

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const changeThemeOnDocument = useCallback((nextTheme: ThemeType) => {
    document.body.dataset.theme = nextTheme;
    document.cookie = `theme=${nextTheme}; path=/`;
  }, []);

  const handleChangeTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    changeThemeOnDocument(nextTheme);
  }, [changeThemeOnDocument, theme]);

  useEffect(() => {
    // NOTE: for synchronize cookie and theme state
    const cookieTheme = (extractFromCookie(document.cookie, "theme") ||
      DEFAULT_THEME) as ThemeType;
    setTheme(cookieTheme);
    changeThemeOnDocument(cookieTheme);
    setIsThemeLoaded(true);
  }, [changeThemeOnDocument]);

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
