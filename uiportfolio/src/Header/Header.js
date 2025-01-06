import "./header.css"
import {Link} from "react-router-dom";
import {useAuth} from "../Utilities/AuthContext";
import {useTheme} from "../Utilities/ThemeContext";
function Header() {
    const {login, setLogin, userInfo,setUserInfo} = useAuth();
    const {lightTheme, setLightTheme} = useTheme();
    
    function handleLogout(){     
        setLogin(!login);
    }
    
    function handleTheme(){
        setLightTheme(!lightTheme);
    }
    
    const val = userInfo;
    return (

        <div className="header" >   
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/pwd-gen">Password Generator </Link>
            <span className="nav">
                {login ? WelcomeMessage(userInfo)  : null}

                <label onClick={handleTheme}>{lightTheme ? "Dark Theme" : "Light Theme"}</label>
                <label onClick={handleLogout}>Log Out</label>
            </span>
        </div>
    )
}

function WelcomeMessage(userInfo){
    console.log("from welcome message : " + userInfo);
    return (
        <label>Welcome! {userInfo} </label>
    )
}

export default Header;