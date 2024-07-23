import { createContext, useState } from "react"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    console.log(username)

    // get input field values
    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const [signupUsernameValue, setSignupUsernameValue] = useState('')
    const [signupPasswordValue, setSignupPasswordValue] = useState('')
    const [signupConfirmPasswordValue, setSignupConfirmPasswordValue] = useState('')

    // signup validation (rest of code in ./context-components/signupValidation)
    const signupCreateAccountButton = (username, password, confirmationPassword, validateUserInputFunc) => {
        validateUserInputFunc(username, password, confirmationPassword, saveUser)
    }

    // login validation 
    // check if username exists, if doesn't exist, throw error
    // check if username does exist,
    // then check if password entered is the same as the key of the username value

    const validateLoginInputs = (username, password, setUser) => {
        if (localStorage.getItem(username) == null) {
            return "user doesn't exist"
        } else if (localStorage.getItem(username) !== password) {
            return "password incorrect"
        } else if (localStorage.getItem(username) === password) {
            setUser(username)
            return "PASS"
        }
    }

    const loginButton = (username, password) => {
        validateLoginInputs(username, password, setUsername)
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

    const loginContext = {
        loginUsernameValue, setLoginUsernameValue,
        loginPasswordValue, setLoginPasswordValue,
        loginButton
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