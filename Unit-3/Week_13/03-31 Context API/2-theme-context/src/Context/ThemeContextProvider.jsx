import React from 'react'

export const ThemeContext = React.createContext();

const themeValues = {
    dark: {
        buttonColor: "teal",
        backgroundColor: "#212121",
        textColor: "white"
    },
    light: {
        buttonColor: "grey",
        backgroundColor: "#f5f5f5",
        textColor: "#000"
    }
}

export const ThemeContextProvider = ({children}) => {

    const [currentTheme, setCurrentTheme] = React.useState("light");

    const toggleTheme = ()=>{
        setCurrentTheme( currentTheme === "light" ? "dark" : "light")
    }

    const value = {
        currentTheme,
        toggleTheme,
        theme: themeValues[currentTheme]
    }

    return (
        <div>
            <ThemeContext.Provider value = {value}>
                { children }
            </ThemeContext.Provider>
        </div>
    )
}