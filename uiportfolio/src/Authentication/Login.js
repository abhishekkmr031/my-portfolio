import {useState} from "react";
import "./Login.css"
function Login(){
    const[user, setUser] = useState({
        firstname:"",
        lastname:"",
        age:""
    });
    
    function handleOnChange(e){
        const {name, value} = e.target;
        console.log(e.target);
        
        setUser((prev)=>({...prev, [name]:value}));
    }
    
    function handleSubmit(e){
        
        console.log(user);
        e.preventDefault();
    }
    
    
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="firstname">First Name
                    <input type="text" name="firstname" onChange={handleOnChange} value={user.firstname} placeholder="First Name"/>
                </label>


                <label htmlFor="lastname">Last Name
                    <input type="text" name="lastname" onChange={handleOnChange} value={user.lastname} placeholder="LastName"/>
                </label>

                <label htmlFor="age">Age
                    <input type="text" name="age" onChange={handleOnChange} value={user.age} placeholder="age"/>
                </label>
                
                <input id="submit" type="submit"  value="Login"/>
            </form>
        </div>
    )
}

export default Login;