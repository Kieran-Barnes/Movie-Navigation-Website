import { createContext, useState } from "react"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    // create user
        // get values from inputs
        // validate values from inputs
        // save it in local storage

    // get values for inputs
    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const contextValues = {
        userLoggedIn,
        setUserLoggedIn,

        loginUsernameValue,
        setLoginUsernameValue,

        loginPasswordValue,
        setLoginPasswordValue
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}