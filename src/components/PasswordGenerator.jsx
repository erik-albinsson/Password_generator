import React, { useEffect } from "react";
import { PasswordClipboard } from "./PasswordClipboard";
import { PasswordLengthSlider } from "./PasswordLengthSlider"
import { PasswordGeneratorOptions } from "./PasswordGeneratorOptions";
import { generatePassword } from "../helpers/GeneratePassword";
import { passwordStrengthCalculator } from "../helpers/PasswordStrengthCalculator";
import { PasswordStrengthDisplay } from "./PasswordStrengthDisplay";
import Arrow from "../assets/images/icon-arrow-right.svg"

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
        //New password removes previous copy-respons
        document.getElementById("copy-respons").textContent = ""
        setPassword(generatePassword(passwordLength, passwordOptions));
    }

    useEffect(() => {
      setPasswordStrength(passwordStrengthCalculator(passwordLength, passwordOptions));
    }, [passwordLength, passwordOptions])

    return (
       <div className="pwd-gen-container">
        <PasswordClipboard password={password}/>
        <div>
            <PasswordLengthSlider  passwordLength={passwordLength} handleLength={handleLength} />
            <PasswordGeneratorOptions handleOptions={handleOptions} />
            <PasswordStrengthDisplay passwordStrength={passwordStrength}/>
            <div className="div-generate-pwd">
                <button className="btn-generate-pwd" onClick={() => handlePassword(passwordLength, passwordOptions)}>
                    <p className="body-medium" >Generate</p>  
                    <img src={Arrow} alt="Arrow right" />
                </button>
            </div>
        </div>
       </div>
    );
}