const validateLoginInputs = (username, password, setUser) => {
    if (localStorage.getItem(username) == null) {
        return "user doesn't exist"
    } else if (localStorage.getItem(username) !== password) {
        return "password incorrect"
    } else if (localStorage.getItem(username) === password) {
        setUser(username)
        localStorage.setItem('userLoggedIn', true)
        return "PASS"
    }
}

export { validateLoginInputs }