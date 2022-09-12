import React from "react";

export function PasswordGeneratorOptions({passwordLength, handleLength, handleOptions}){
    
    return (
        <>
        <div className="slider">
        <h3>Password length</h3>
        <p>{passwordLength}</p>
        <input type="range" min={5} max={20} defaultValue={passwordLength} onChange={handleLength}/>
        </div>
        <div className="options">
           <div>
            <input type="checkbox" id="uppercase" defaultChecked={true} onChange={handleOptions} />
            <label htmlFor="uppercase">Include Uppercase Letters</label>
           </div>
           <div>
            <input type="checkbox" id="lowercase" defaultChecked={true} onChange={handleOptions} />
            <label htmlFor="lowercase">Include Lowercase Letters</label>
           </div>
           <div>
            <input type="checkbox" id="numbers" defaultChecked={true} onChange={handleOptions} />
            <label htmlFor="numbers">Include Numbers</label>
           </div>
           <div>
            <input type="checkbox" id="symbols" defaultChecked={false} onChange={handleOptions} />
            <label htmlFor="symbols">Include Symbols</label>
           </div>
        </div>
        </>
    )
}