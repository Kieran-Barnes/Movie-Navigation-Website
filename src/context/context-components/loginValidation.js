const validateLoginInputs = (username, password, setUser, setUserLoggedInFunc) => {
    if (localStorage.getItem(username) == null) {
        return "user doesn't exist"
    } else if (localStorage.getItem(username) !== password) {
        return "password incorrect"
    } else if (localStorage.getItem(username) === password) {
        setUser(username)
        localStorage.setItem('userLoggedIn', true)
        setUserLoggedInFunc(true)
        return "PASS"
    }
}

export { validateLoginInputs }