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

    // login validation 
    // check if username exists, if doesn't exist, throw error
    // check if username does exist,
    // then check if password entered is the same as the key of the username value

    const validateLoginInputs = (username, password) => {
        if (localStorage.getItem(username) == null) {
            console.log("user doesn't exist")
            return "user doesn't exist"
        } else if (localStorage.getItem(username) !== password) {
            console.log("password incorrect")
            return "password incorrect"
        } else if (localStorage.getItem(username === password)) {
            console.log("PASS")
            return "PASS"
        }
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