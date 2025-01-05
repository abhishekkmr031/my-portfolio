import "./pwd.css";
import {useState} from "react";

function PasswordGenerator(){
    const [password, setPassword] = useState("$some-random-pwd$");
    const [pwdConfig, setPwdConfig] = useState({
        letters:true,
        numbers:true,
        mixedCase:true,
        specialChars:true,
    })
    
    const [pwdLength,setPwdLength] = useState(8);
    
    return (
        <div className="pwd-gen-container">
            <div className="title"> Create strong passwords with Password Generator </div>
            <div className="pwd-box">
                <input className="pwd-show" type={"text"} value={password} readOnly={true} />
            </div>
            <div className="pwd-len"></div>
            <div className="pwd-config"></div>
        </div>
    )
}


export default PasswordGenerator;
