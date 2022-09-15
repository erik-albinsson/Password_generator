import React from "react";
import CopyImg from "../assets/images/icon-copy.svg"

export function PasswordClipboard({password}){
    async function copyPassword () {
        if(password !== ""){
            try {
                await navigator.clipboard.writeText(password);
                console.log('Content copied to clipboard');
                document.getElementById("copy-respons").textContent = "COPIED"
                setTimeout(clearCopyRespons,3000)
                
            } catch (err) {
                console.error('Failed to copy: ', err);
                document.getElementById("copy-respons").textContent = "Failed to Copy"
                setTimeout(clearCopyRespons,3000)
            }
        } else {
            document.getElementById("copy-respons").textContent = "Failed to Copy"
                setTimeout(clearCopyRespons,3000)
        } 
    }

    const clearCopyRespons = function(){
        document.getElementById("copy-respons").textContent = ""
    }
    return(
        <div className="password-display">
            {password === "" ? <p className="heading-large" style={{color: "var(--grey)"}}>P4$5W0rD!</p> :
            <p className="heading-large">{password}</p>}
            <p id="copy-respons" className="copy-respons body-medium"></p>
            <img src={CopyImg} alt="Copy Image" onClick={copyPassword} />
        </div>
    )
}