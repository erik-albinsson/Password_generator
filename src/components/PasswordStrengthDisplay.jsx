import React from "react";

export function PasswordStrengthDisplay({passwordStrength}){
    return(
        <div className="password-strength-container">
            <p className="body-medium" style={{color: "var(--grey)"}}>Strength</p>
            <div className="password-strength-display" style={{display: "flex"}}>
                <p className="heading-medium">{passwordStrength === 0 ? "INVALID" : passwordStrength === 1 ? "TOO WEAK!" :
                 passwordStrength === 2 ? "WEAK" : passwordStrength === 3 ? "MEDIUM" : passwordStrength === 4 && "STRONG"}</p>
                
                <p className={`strenght-meter ${passwordStrength === 1 ? "too-weak" : passwordStrength === 2 ? "weak" : 
                    passwordStrength === 3 ? "medium" : passwordStrength === 4 && "strong"}`}/>

                <p className={`strenght-meter ${passwordStrength === 2 ? "weak" : 
                    passwordStrength === 3 ? "medium" : passwordStrength === 4 && "strong"}`}/>

                <p className={`strenght-meter ${passwordStrength === 3 ? "medium" : passwordStrength === 4 && "strong"}`}/>

                <p className={`strenght-meter ${passwordStrength === 4 && "strong"}`}/>
            </div>
        </div>
    )
}