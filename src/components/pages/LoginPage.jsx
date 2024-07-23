// import external utilities
import { Link } from "react-router-dom";
import { useContext } from "react";

// import components
import UsernamePasswordInputField from "../common/UsernamePasswordInputField";
import BackToHomeButton from "../common/BackToHomeButton";

// import context
import { validateLoginInputs } from "../../context/context-components/loginValidation";  
import { UserContext } from "../../context/UserContext";

export default function LoginPage() {
    const { 
        loginUsernameValue, 
        setLoginUsernameValue, 
        loginPasswordValue, 
        setLoginPasswordValue,
        loginButton
    } = useContext(UserContext)

    return (
        <>
            <h1>Login</h1>
            <form method="POST">
                <UsernamePasswordInputField 
                    tagPrefix={'login-username'} 
                    labelName={'Username'} 
                    inputType={'text'} 
                    inputValue={loginUsernameValue}
                    onChangeFunc={setLoginUsernameValue}
                />
                <UsernamePasswordInputField 
                    tagPrefix={'login-password'} 
                    labelName={'Password'} 
                    inputType={'password'} 
                    inputValue={loginPasswordValue}
                    onChangeFunc={setLoginPasswordValue}
                />
                <button 
                    type="submit"
                    onClick={e => {
                        e.preventDefault()
                        loginButton(loginUsernameValue, loginPasswordValue, validateLoginInputs)
                    }}
                >
                    Log in
                </button>
            </form>
            <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
            <BackToHomeButton />

        </>
    )
}