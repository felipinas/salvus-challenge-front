import React, { createContext, useState } from 'react';

export const UserContext = createContext()

function UserProvider(props) {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        isLogged: false,
        isAdmin: false
    });

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;