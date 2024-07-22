export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="login-username-input-field">Username</label>
                    <input type="text" name="login-username-input-field" id="login-username-input-field"/>
                </div>
                <div>
                    <label htmlFor="login-password-input-field">Password</label>
                    <input type="text" name="login-password-input-field" id="login-password-input-field"/>
                </div>
                <button type="submit">Log in</button>
            </form>
            <p>Dont have an account? Sign up</p>
        </>
    )
}