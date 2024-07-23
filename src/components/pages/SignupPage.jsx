import { Link } from "react-router-dom";
import UsernamePasswordInputField from "../common/UsernamePasswordInputField";
import BackToHomeButton from "../common/BackToHomeButton";

export default function SignupPage() {
    return (
        <>
            <h1>Sign up</h1>
            <form>
                <UsernamePasswordInputField tagPrefix={'signup-username'} labelName={'Username'} inputType={'text'} />
                <UsernamePasswordInputField tagPrefix={'signup-password'} labelName={'Password'} inputType={'password'} />
                <UsernamePasswordInputField tagPrefix={'signup-confirm-password'} labelName={'Confirm Password'} inputType={'password'} />
                <button type="submit">Create Account</button>
            </form>
            <p>Have an account? <Link to="/login">Log in</Link></p>
            <BackToHomeButton />
        </>
    )
}