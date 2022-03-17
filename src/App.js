import logo from "./sf-logo.png"
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
        <div className="main-box">
          <img src={logo} id="logo" />
          <button onClick={() => {navigate('/login')}} id="login-button">Login</button>
        </div>
        
    </div>
  );
}

export default App;
