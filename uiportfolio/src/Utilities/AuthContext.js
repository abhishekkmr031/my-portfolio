import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
    const [login, setLogin] = useState(false);
    const [userInfo,setUserInfo] = useState("");
    
    const contextObj = {
        login,
        setLogin,
        userInfo,
        setUserInfo
    }
    
    return (
        <AuthContext.Provider value={contextObj}>
            {children}
        </AuthContext.Provider>
    )
}