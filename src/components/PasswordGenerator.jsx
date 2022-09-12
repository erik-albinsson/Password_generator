import React, { useEffect } from "react";
import { PasswordClipboard } from "./PasswordClipboard";
import { PasswordGeneratorOptions } from "./PasswordGeneratorOptions";
import { generatePassword } from "../helpers/GeneratePassword";
import { passwordStrengthCalculator } from "../helpers/PasswordStrengthCalculator";
import { PasswordStrengthDisplay } from "./PasswordStrengthDisplay";

export function PasswordGenerator()  {

    //states
    const [password, setPassword] = React.useState("")
    const [passwordStrength, setPasswordStrength] = React.useState()
    const [passwordLength, setPasswordLength] = React.useState(10)
    const [passwordOptions, setPasswordOptions] = React.useState({
        uppercase: true, lowercase: true, numbers: true, symbols: false})

    //state management
    const handleLength = (e) => {
        setPasswordLength(e.target?.value);
    }

    const handleOptions = (e) => {
        let isChecked = e.target?.checked;
        let targetedOption = e.target?.id;
        setPasswordOptions(prev => ({...prev, [targetedOption]: isChecked}))
    }

    const handlePassword = (passwordLength, passwordOptions) => {
        setPassword(generatePassword(passwordLength, passwordOptions));
    }

    useEffect(() => {
      setPasswordStrength(passwordStrengthCalculator(passwordLength, passwordOptions));
    }, [passwordLength, passwordOptions])

    return (
       <div className="Pwd_gen_container">
        <PasswordClipboard password={password}/>
        <PasswordGeneratorOptions passwordLength={passwordLength} handleLength={handleLength} handleOptions={handleOptions} />
        <PasswordStrengthDisplay passwordStrength={passwordStrength}/>

        <button onClick={() => handlePassword(passwordLength, passwordOptions)}>Generate</button>

       </div>
    );
}