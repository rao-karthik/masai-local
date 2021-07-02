import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { ThemeContext } from '../Context/ThemeContextProvider'

export const Navbar = () => {
    const { isAuth, handleToggleAuth } = React.useContext(AuthContext)

    const {theme, toggleTheme, currentTheme} = React.useContext(ThemeContext)
    
    return (
        <div>
            <button style= {{background: theme.buttonColor}} onClick = {handleToggleAuth} >{isAuth ? "Sign Out" : "Sign In"}</button>
            <button style= {{background: theme.buttonColor}} onClick = {toggleTheme}>Switch to {`${currentTheme === "light" ? "Dark" : "Light"}`} </button>
        </div>
    )
}
