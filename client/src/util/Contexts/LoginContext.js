import React from 'react';

const LoginContext = React.createContext({
    userName: "",
    setUserName: () => {},
    loggedIn: false,
    setLoggedIn: () => {}
})



export default LoginContext 

// export default LoginContext  



 