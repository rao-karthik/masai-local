import React from 'react'

export const ThemeContext = React.createContext();

ThemeContext.displayName = "THEME_CONTEXT";

const themeValues = {
    light : {
        buttonColor: 'grey',
        bodyBackground: '#f5f5f5',
        textColor: '#000'
    },
    dark : {
        buttonColor: 'teal',
        bodyBackground: '#424242',
        textColor: '#fff'
    }
}

export const ThemeContextProvider = ({children}) => {

    const [currentTheme, setTheme] = React.useState("light");

    const toggleTheme = ()=>{
        setTheme(currentTheme === "light" ? "dark" : "light")
    };

    const value = {
        currentTheme,
        toggleTheme,
        theme: themeValues[currentTheme]
    }
    
    return (
        <ThemeContext.Provider value = {value}>
            {children}
        </ThemeContext.Provider>
    )
}
