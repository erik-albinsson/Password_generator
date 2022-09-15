import React from "react";

export function PasswordLengthSlider({passwordLength, handleLength}){

    return(
        <div className="password-length-slider">
            <div className="password-length-display">
            <p className="body-medium">Password length</p>
            <p className="heading-large" style={{color: "var(--neon-green)"}}>{passwordLength}</p>
            </div>
            <input type="range" className="slider-length" min={5} max={20} defaultValue={passwordLength} onChange={handleLength}/>
        </div>
    )
}