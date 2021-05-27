import React from 'react';

const LoginContext = React.createContext({
    userData: {},
    setUserName: () => {},
    loggedIn: false,
    setLoggedIn: () => {}
})

export default LoginContext 




 