import {useState} from "react";
import "./Login.css"
import {useAuth} from "./AuthContext";

function Login() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        age: ""
    });

    const {login, setLogin, userInfo, setUserInfo} = useAuth();
    // 


    function handleOnChange(e) {
        //console.log(abc);
        const {name, value} = e.target;
        //console.log(e.target);

        setUser((prev) => ({...prev, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        setLogin(true);
        setUserInfo(user.firstname);
        //console.log(login);
    }

    return (        
             <div className="login">
                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor="firstname">First Name
                            <input type="text" name="firstname" onChange={handleOnChange} value={user.firstname}
                                   placeholder="First Name"/>
                        </label>

                        <label htmlFor="lastname">Last Name
                            <input type="text" name="lastname" onChange={handleOnChange} value={user.lastname}
                                   placeholder="LastName"/>
                        </label>

                        <label htmlFor="age">Age
                            <input type="text" name="age" onChange={handleOnChange} value={user.age} placeholder="age"/>
                        </label>

                        <input id="submit" type="submit" value="Login"/>
                    </form>
                </div>       
    )    
}


export default Login;