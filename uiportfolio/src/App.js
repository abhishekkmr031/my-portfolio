import './App.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Login from "./Authentication/Login";

function App() {
  return (
      <div>
        <Header/>
        {/*<Home></Home>*/}
          <Login/>
        <Footer/>
      </div>
  );
}

export default App;
