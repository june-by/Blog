import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: "dark", undefined });

export const ThemeProvider: React.FC<{ initialTheme: string }> = ({ children, initialTheme }) => {
	const [theme, setTheme] = useState(initialTheme);
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
