import React from 'react';

export const DarkModeContext = React.createContext();

const themeValues = {
    dark: {
        buttonColor: '#29CB97',
        usersTitleColor: '#FFFFFF',
        usersLocColor: '#748AA1',
        dashboardColor: '#1F2327',
        sidebarColor: '#16191C',
        left: '368px',
        userContainer: '#292E33',
        lineCol: "#363C43"
    },
    light: {
        buttonColor: '#2991CB',
        usersTitleColor: '#31394D',
        usersLocColor: '#748AA1',
        dashboardColor: '#F5F6FA',
        sidebarColor: '#FFFFFF',
        left: '338px',
        userContainer: 'white',
        lineCol: "#E5E9F2"
    }
}

export const DarkModeContextProvider = ({children}) => {

    const [currentTheme, setCurrentTheme] = React.useState('light');

    const toggleTheme = ()=>{
        setCurrentTheme (currentTheme === 'light' ? 'dark' : 'light')
    }

    const value = {
        currentTheme,
        toggleTheme,
        theme: themeValues[currentTheme]
    }
    
    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}
