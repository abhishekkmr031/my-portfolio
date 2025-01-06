import "./pwd.css";
import {useState} from "react";

function PasswordGenerator(){    
    const [pwdConfig, setPwdConfig] = useState({
        letters:true,
        numbers:true,
        mixedCase:true,
        specialChars:true,
    })
    
    const [pwdLength,setPwdLength] = useState({
        value:8,
        max:64,
        min:4
    });
    const [password, setPassword] = useState(generateSecurePassword(8));

    function handleLength(e){
        const {name, value} = e.target; 
        console.log(name + "  ->  " +value);
        setPwdLength((prev)=>({...prev, [name]:value}));
        handleGeneratePwd();
    }

    function generateSecurePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        const charsetLength = charset.length;
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);

        return Array.from(array, (value) => charset[value % charsetLength]).join('');
    }
    
    function handleGeneratePwd(){
        setPassword(generateSecurePassword(pwdLength.value));
    }
    
    function handleConfigChange(e){
        const name= e.target.name;
        
        if(name === "letters" && e.target.checked === false){
            setPwdConfig({...pwdConfig, mixedCase:false,letters:false});
        }else{
            setPwdConfig({...pwdConfig, [name]:e.target.checked});
        }
        handleGeneratePwd();
    }
    function PwdOutput(){
        return (
            <>
                <div className={pwdLength.value >= 4 && pwdLength.value < 8 ? "pwd-box pwd-show-weak"
                    : pwdLength.value >= 8 && pwdLength.value <= 16 ? "pwd-box pwd-show-medium"
                        : "pwd-box pwd-show-strong"}>
                    <input className={pwdLength.value >= 4 && pwdLength.value < 8 ? "pwd-show pwd-show-weak"
                        : pwdLength.value >= 8 && pwdLength.value <= 16 ? "pwd-show pwd-show-medium"
                            : "pwd-show pwd-show-strong"}
                           type={"text"} value={password} readOnly={true}/>

                    <button onClick={handleGeneratePwd}>Refresh</button>
                    <div>
                        {pwdLength.value >= 4 && pwdLength.value < 8 ? "Weak"
                            : pwdLength.value >= 8 && pwdLength.value <= 16 ? "Medium"
                                : "Strong"}
                    </div>
                </div>

            </>

        )
    }

    function PwdConfigSection() {
        return (
            <div className="pwdConfig">
                <label>letters</label>
                <input type="checkbox" name="letters" checked={pwdConfig.letters} onChange={handleConfigChange}/>
                <label>numbers</label>
                <input type="checkbox" name="numbers" checked={pwdConfig.numbers} onChange={handleConfigChange}/>
                <label>mixedCase</label>
                <input type="checkbox" name="mixedCase" checked={pwdConfig.mixedCase}
                       onChange={handleConfigChange} disabled={!pwdConfig.letters}/>
                <label>specialChars</label>
                <input type="checkbox" name="specialChars" checked={pwdConfig.specialChars} onChange={handleConfigChange}/>
            </div>
        )
    }

    function PasswordLengthComponent() {
        return (
            <div>                                  
                <input className="range" name="value" type="range" min={pwdLength.min} max={pwdLength.max}
                           value={pwdLength.value} onChange={handleLength}/>
                <label htmlFor="password-length">{pwdLength.value}</label>
            </div>
        )
    }

    
    
    return (
        <div className="pwd-gen-container">
            <div className="title"> Create strong passwords with Password Generator </div>
            {<PwdOutput/>}
            <div className="pwd-len">
                {<PasswordLengthComponent/>}
                {<PwdConfigSection/>}
            </div>            
        </div>
    )
}




export default PasswordGenerator;
