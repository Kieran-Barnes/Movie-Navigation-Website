export default function SignupPage() {
    return (
        <>
            <h1>Sign up</h1>
            <form>
                <div>
                    <label htmlFor="signup-username-input-field">Username</label>
                    <input type="text" name="signup-username-input-field" id="signup-username-input-field"/>
                </div>
                <div>
                    <label htmlFor="signup-password-input-field">Password</label>
                    <input type="text" name="signup-password-input-field" id="signup-password-input-field"/>
                </div>
                <div>
                    <label htmlFor="signup-confirm-password-input-field">Confirm Password</label>
                    <input type="text" name="signup-confirm-password-input-field" id="signup-confirm-password-input-field"/>
                </div>
                <button type="submit">Create Account</button>
            </form>
            <p>Have an account? Log in</p>
        </>
    )
}