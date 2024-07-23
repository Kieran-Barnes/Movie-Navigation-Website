import { createContext, useState } from "react"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const [signupUsernameValue, setSignupUsernameValue] = useState('')
    const [signupPasswordValue, setSignupPasswordValue] = useState('')
    const [signupConfirmPasswordValue, setSignupConfirmPasswordValue] = useState('')

    const loginContext = {
        loginUsernameValue, setLoginUsernameValue,
        loginPasswordValue, setLoginPasswordValue
    }

    const signupContext = { 
        signupUsernameValue, setSignupUsernameValue,
        signupPasswordValue, setSignupPasswordValue,
        signupConfirmPasswordValue, setSignupConfirmPasswordValue
    }

    const contextValues = {
        userLoggedIn,
        setUserLoggedIn,
        loginContext,
        signupContext
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