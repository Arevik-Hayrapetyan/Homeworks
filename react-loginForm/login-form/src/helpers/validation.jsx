export function isValidEmail(email){
    const emailChecker = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const isValidEmail =emailChecker.test(email)
    if(isValidEmail) return true;
    return false
}

export function isValidPassword(password){
    const passwordChecker = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
    const isValidPassword = passwordChecker.test(password)
    if(isValidPassword) return true;
    return false
}