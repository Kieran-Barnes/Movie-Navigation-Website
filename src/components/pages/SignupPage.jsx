import { Link } from "react-router-dom";
import UsernamePasswordInputField from "../common/UsernamePasswordInputField";
import BackToHomeButton from "../common/BackToHomeButton";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function SignupPage() {
    const { signupUsernameValue, setSignupUsernameValue, signupPasswordValue, setSignupPasswordValue, signupConfirmPasswordValue, setSignupConfirmPasswordValue } = useContext(UserContext)

    return (
        <>
            <h1>Sign up</h1>
            <form>
                <UsernamePasswordInputField 
                    tagPrefix={'signup-username'} 
                    labelName={'Username'} 
                    inputType={'text'} 
                    inputValue={signupUsernameValue}
                    onChangeFunc={setSignupUsernameValue}
                />
                <UsernamePasswordInputField 
                    tagPrefix={'signup-password'} 
                    labelName={'Password'} 
                    inputType={'password'} 
                    inputValue={signupPasswordValue}
                    onChangeFunc={setSignupPasswordValue}
                />
                <UsernamePasswordInputField 
                    tagPrefix={'signup-confirm-password'} 
                    labelName={'Confirm Password'} 
                    inputType={'password'} 
                    inputValue={signupConfirmPasswordValue}
                    onChangeFunc={setSignupConfirmPasswordValue}
                />
                <button type="submit">Create Account</button>
            </form>
            <p>Have an account? <Link to="/login">Log in</Link></p>
            <BackToHomeButton />
        </>
    )
}