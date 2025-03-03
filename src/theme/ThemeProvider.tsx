import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {ReactNode, useMemo, useState} from "react";



interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider = ({children}:ThemeProviderProps) => {
    const [theme, setTheme]  = useState(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: toggleTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}