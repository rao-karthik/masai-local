import React from 'react';
import { AuthContext } from '../Context/AuthContextProvider';


export const LoginStatus = () => {
    
    const {isAuth, toggleIsAuth} = React.useContext(AuthContext);

    return (
        <div>
            <h1>User is {isAuth ? "Logged In" : "Logged Out"}</h1>
        </div>
    )
}
