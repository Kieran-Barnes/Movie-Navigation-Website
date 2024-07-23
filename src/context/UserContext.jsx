import { createContext, useState } from "react"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    // get input field values
    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const [signupUsernameValue, setSignupUsernameValue] = useState('')
    const [signupPasswordValue, setSignupPasswordValue] = useState('')
    const [signupConfirmPasswordValue, setSignupConfirmPasswordValue] = useState('')

    const loginContext = {
        loginUsernameValue, setLoginUsernameValue,
        loginPasswordValue, setLoginPasswordValue
    }

    // signup validation (rest of code in ./context-components/signupValidation)
    const signupCreateAccountButton = (username, password, confirmationPassword, validateUserInputFunc) => {
        validateUserInputFunc(username, password, confirmationPassword, saveUser)
    }

    // save user values to localStorage

    const saveUser = (username, password) => {
        localStorage.setItem(username, password)
    }

    const signupContext = { 
        signupUsernameValue, setSignupUsernameValue,
        signupPasswordValue, setSignupPasswordValue,
        signupConfirmPasswordValue, setSignupConfirmPasswordValue,
        signupCreateAccountButton
    }

    const contextValues = {
        userLoggedIn,
        setUserLoggedIn,
        ...loginContext,
        ...signupContext
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