//passwordStrengthCalculator is responsible for giving an evaluation 
//for the strength of the password based on the the sum of the available 
//characters and length of the password 

export function passwordStrengthCalculator(passwordLength, passwordOptions) {
    let strength;
    let avaiableChar = "";
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
    //A simplified operation that illustrates the relationship between number of combinations
    const passwordValue = passwordLength**2 * avaiableChar.length;
    
    if (passwordValue === 0){
        strength = 0;
    } else if (passwordValue < 1500) {
        strength = 1;
    } else if (passwordValue < 3500) {
        strength = 2;
    } else if (passwordValue < 7000) {
        strength = 3;
    } else strength = 4;

    return strength
}

   