import React from "react";

export function PasswordGeneratorOptions({handleOptions}){
    
    return (
        <div>
            <label className="checkbox-container body-medium">Include Uppercase Letters
                <input type="checkbox" id="uppercase" defaultChecked={true} onChange={handleOptions} />
                <span className="checkmark"></span>
            </label>
            <label className="checkbox-container body-medium" >Include Lowercase Letters
                <input type="checkbox" id="lowercase" defaultChecked={true} onChange={handleOptions} />
                <span className="checkmark"></span>
            </label>
            <label className="checkbox-container body-medium">Include Numbers
                <input type="checkbox" id="numbers" defaultChecked={true} onChange={handleOptions} />
                <span className="checkmark"></span>
            </label>
            <label className="checkbox-container body-medium">Include Symbols
                <input type="checkbox" id="symbols" defaultChecked={false} onChange={handleOptions} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}