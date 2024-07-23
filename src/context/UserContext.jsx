import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const UserContext = createContext() 

function UserContextProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(userLoggedInBoolean())
    const [username, setUsername] = useState('')

    // get input field values
    const [loginUsernameValue, setLoginUsernameValue] = useState('')
    const [loginPasswordValue, setLoginPasswordValue] = useState('')

    const [signupUsernameValue, setSignupUsernameValue] = useState('')
    const [signupPasswordValue, setSignupPasswordValue] = useState('')
    const [signupConfirmPasswordValue, setSignupConfirmPasswordValue] = useState('')

    // navigation
    const navigate = useNavigate()

    // initial state setter for 'userLoggedIn'
    function userLoggedInBoolean() {
        if (localStorage.getItem('userLoggedIn') === 'true') {
            return true
        }
        return false
    }

    // signup validation (rest of code in ./context-components/signupValidation)
    const signupCreateAccountButton = (username, password, confirmationPassword, validateUserInputFunc) => {
        if (validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername, setUserLoggedIn) === 'PASS') {
            validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername, setUserLoggedIn)
            navigate('/')
        }
        validateUserInputFunc(username, password, confirmationPassword, saveUser, setUsername, setUserLoggedIn)
    }

    // login validation (rest of code in ./context-components/loginValidation)
    const loginButton = (username, password, validateLoginFunc) => {
        if (validateLoginFunc(username, password, setUsername, setUserLoggedIn) === "PASS") {
            validateLoginFunc(username, password, setUsername, setUserLoggedIn)
            navigate('/')
        } 
        validateLoginFunc(username, password, setUsername, setUserLoggedIn)
        
    }

    // save user values to localStorage
    const saveUser = (username, password) => {
        localStorage.setItem(username, password)
    }

    // logout functionality
    const logout = () => {
        setUsername('')
        setUserLoggedIn(false)
        localStorage.setItem('userLoggedIn', false)
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