import {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null);

export function useTheme(){
    return useContext(ThemeContext);
}
export function ThemeProvider({children}){
    const [lightTheme, setLightTheme] = useState(true);
    
    const themeObj = {
        lightTheme,
        setLightTheme
    }
    
    return(
        <ThemeContext.Provider value={themeObj}>
            {children}
        </ThemeContext.Provider>
    )
}