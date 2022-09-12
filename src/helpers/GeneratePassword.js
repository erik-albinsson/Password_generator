//generatePassword is responsible for generating a random password based on passwordOptions and passwordLength

export function generatePassword(passwordLength, passwordOptions){
    let avaiableChar = "";
    let password = "";
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    
    //Adds the appropriate characters based on options checked
    Object.entries(passwordOptions).map(([key,value]) => {
        if (key === "uppercase" && value) {
            avaiableChar += uppercase;
        } else if (key === "lowercase" && value) {
            avaiableChar += lowercase;
        } else if (key === "numbers" && value) {
            avaiableChar += numbers;
        } else if (key === "symbols" && value) {
            avaiableChar += symbols;
        }
    })

    //Recursively picks a random character from the avaiableChar string until appropriate length
    if (avaiableChar !== "") {
        for (let i = 0; i < passwordLength; i++) {
            password += avaiableChar[Math.floor(Math.random() * avaiableChar.length)]
        }
    }
    return password;
}