import React from "react";

export function PasswordStrengthDisplay({passwordStrength}){
    return(
        <div>
            <p>Strength: {passwordStrength}</p>
        </div>
    )
}