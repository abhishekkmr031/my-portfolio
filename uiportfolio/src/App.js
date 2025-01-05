import './App.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Login from "./Utilities/Login";
import {Routes, Route} from "react-router-dom";
import About from "./About/About";
import {useAuth} from "./Utilities/AuthContext";
import {useTheme} from "./Utilities/ThemeContext";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";



function App() {
    const {login, setLogin, userInfo, setUserInfo} = useAuth();
    const {lightTheme, setLightTheme} = useTheme();
   
return (
      <div>
          {login 
              ? <div className={lightTheme ? "light-theme" : "dark-theme"}>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/pwd-gen" element={<PasswordGenerator/>}/>
                  </Routes>
                  <Footer/>
              </div>  
              : <Login/>}

      </div>    
);
}

export default App;
