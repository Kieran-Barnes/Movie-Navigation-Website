import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [username, setUsername] = useState('')

    // get input field values
    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const [signupUsernameValue, setSignupUsernameValue] = useState('')
    const [signupPasswordValue, setSignupPasswordValue] = useState('')
    const [signupConfirmPasswordValue, setSignupConfirmPasswordValue] = useState('')

    // navigation
    const navigate = useNavigate()

    useEffect(() => {
        const loggedIn = localStorage.getItem('userLoggedIn') === 'true'
        setUserLoggedIn(loggedIn)
    }, [])

    useEffect(() => {
        if (username === '') {
            setUserLoggedIn(false)
            localStorage.setItem('userLoggedIn', 'false')
        } else {
            setUserLoggedIn(true)
            localStorage.setItem('userLoggedIn', 'true')
        }
    }, [username])

    // signup validation (rest of code in ./context-components/signupValidation)
    const signupCreateAccountButton = (username, password, confirmationPassword, validateUserInputFunc) => {
        if (validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername) === 'PASS') {
            validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername)
            navigate('/')
        }
        validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername)
    }

    // login validation (rest of code in ./context-components/loginValidation)
    const loginButton = (username, password, validateLoginFunc) => {
        if (validateLoginFunc(username, password, setUsername) === "PASS") {
            validateLoginFunc(username, password, setUsername)
            navigate('/')
        } 
        validateLoginFunc(username, password, setUsername)
        
    }

    // save user values to localStorage
    const saveUser = (username, password) => {
        localStorage.setItem(username, password)
    }

    // logout functionality
    const logout = () => {
        setUsername('')
        navigate('/')
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
        username,
        ...loginContext,
        ...signupContext,
        logout
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