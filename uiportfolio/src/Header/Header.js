import "./header.css"
import {Link} from "react-router-dom";
import {useAuth} from "../Utilities/AuthContext";
import {useTheme} from "../Utilities/ThemeContext";
function Header() {
    const {login, setLogin, userInfo,setUserInfo} = useAuth();
    const {lightTheme, setLightTheme} = useTheme();
    
    function handleLogout(){
        //console.log(userInfo);
        setLogin(!login);
    }
    
    function handleTheme(){
        setLightTheme(!lightTheme);
    }
    return (

        <div className="header" >   
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/pwd-gen">Password Generator </Link>
            
            { login ? <label>Welcome</label> : null}
            <label onClick = {handleLogout}>Log Out</label>
            <label onClick = {handleTheme}>{lightTheme ? "Dark Theme" : "Light Theme"}</label>
        </div>
    )
}

export default Header;