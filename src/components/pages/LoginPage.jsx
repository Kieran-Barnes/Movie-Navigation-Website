import { Link } from "react-router-dom";
import UsernamePasswordInputField from "../common/UsernamePasswordInputField";
import BackToHomeButton from "../common/BackToHomeButton";

export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <form>
                <UsernamePasswordInputField tagPrefix={'login-username'} labelName={'Username'} inputType={'text'} />
                <UsernamePasswordInputField tagPrefix={'login-password'} labelName={'Password'} inputType={'password'} />
                <button type="submit">Log in</button>
            </form>
            <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
            <BackToHomeButton />
            
        </>
    )
}