import React from "react";

export function PasswordClipboard({password}){
    async function copyPassword () {
        try {
            await navigator.clipboard.writeText(password);
            console.log('Content copied to clipboard');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
    }
    return(
        <div>
            <input type="text" placeholder="P4$5W0rD!" disabled value={password} />
            <button onClick={copyPassword}>click</button>
        </div>
    )
}