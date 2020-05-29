import React, { createContext } from 'react'

// const context = useContext(contextValue)
const LoginContext = createContext({
    login: (name) => { },
    logout: () => { },
})

export { LoginContext }
