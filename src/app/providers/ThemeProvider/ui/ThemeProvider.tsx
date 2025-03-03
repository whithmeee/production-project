import {ReactNode, useMemo, useState} from "react";
import { ThemeContext,Theme,LOCAL_STORAGE_THEME_KEY } from "../lib/ThemeContext";



interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider = ({children}:ThemeProviderProps) => {
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
};

export default ThemeProvider;

