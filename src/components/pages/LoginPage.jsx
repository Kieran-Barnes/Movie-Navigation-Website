import { Link } from "react-router-dom";
import UsernamePasswordInputField from "../common/UsernamePasswordInputField";
import BackToHomeButton from "../common/BackToHomeButton";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function LoginPage() {
    const { loginUsernameValue, setLoginUsernameValue, loginPasswordValue, setLoginPasswordValue } = useContext(UserContext)

    return (
        <>
            <h1>Login</h1>
            <form>
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
                <button type="submit">Log in</button>
            </form>
            <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
            <BackToHomeButton />

        </>
    )
}