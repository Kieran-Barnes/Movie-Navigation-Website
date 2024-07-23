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

    // validate input values

    // signup
    const validateUsernameValue = username => {
        if (localStorage.getItem(username)) {
            return `user with ${username} already exists`
        }
        return 'PASS'
    }

    const validatePasswordValue = (password, confirmationPassword) => {
        let messageList = []

        if (password.length < 6) {
            messageList.push('password must be at least 7 characters in length')
        }

        if (password.length > 19) {
            messageList.push('password must be less than 20 characters in length')
        }

        if (!(/\p{Lu}/u.test(password))) {
            messageList.push('password must contain at least one uppercase letter')
        }

        if (!(/\d/.test(password))) {
            messageList.push('password must contain at least one number')
        }

        if (password !== confirmationPassword) {
            messageList.push('passwords do not match')
        }

        if (messageList.length > 0) {
            return messageList
        }
        return 'PASS'
    }

    const validateUserInput = (username, password, confirmationPassword) => {
        if (validateUsernameValue(username) !== 'PASS') {
            return validateUsernameValue(username)
        } else if (validatePasswordValue(password, confirmationPassword) !== 'PASS') {
            return validatePasswordValue(password, confirmationPassword)
        } else {
            saveUser(username, password)
            return 'Signup Successful'
        }
    }

    const signupCreateAccountButton = (username, password, confirmationPassword) => {
        validateUserInput(username, password, confirmationPassword)
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