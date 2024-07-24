const validateUsernameValue = username => {
    if (localStorage.getItem(username)) {
        return `user with username: (${username}) already exists`
    }
    return 'PASS'
}

const validatePasswordValue = (password, confirmationPassword) => {
    let messageList = []

    if (password.length < 6) {
        messageList.push('password must be at least 7 characters in length')
    }

    if (password.length > 19) {
        messageList.push('password must be less than 20 characters in length')
    }

    if (!(/\p{Lu}/u.test(password))) {
        messageList.push('password must contain at least one uppercase letter')
    }

    if (!(/\d/.test(password))) {
        messageList.push('password must contain at least one number')
    }

    if (password !== confirmationPassword) {
        messageList.push('passwords do not match')
    }

    if (messageList.length > 0) {
        return messageList
    }
    return 'PASS'
}

const validateUserInput = (username, password, confirmationPassword, saveFunc, setUser) => {
    if (validateUsernameValue(username) !== 'PASS') {
        return validateUsernameValue(username)
    } else if (validatePasswordValue(password, confirmationPassword) !== 'PASS') {
        return validatePasswordValue(password, confirmationPassword)
    } else {
        saveFunc(username, password)
        setUser(username)
        return 'PASS'
    }
}

export { validateUserInput }