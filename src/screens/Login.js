import {useState} from 'react'
import {authService} from '../services/auth'
import { useNavigate } from "react-router-dom";
import "../styles/auth_styles.css"
function Login(){
    let navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [type,setType] = useState("")

    const typeChange = (event) => {
        setType(event.target.value)
        console.log(event.target.value)
    }

    const formChange = (event) => {
        if(event.target.name === "email"){
            setEmail(event.target.value)
        }
        else{
            setPassword(event.target.value)
        }
    }

    const formSubmit = (event) => {
        event.preventDefault()
        authService.login(email,password,type)
       var loggedIn = localStorage.getItem("userType")
       if(loggedIn) {
            console.log("logged in")
            navigate('/dashboard')
       }
       else{
            console.log("not logged in")
       }
        
    }
    return (
        <div className='login-container'>
            <div className='login-box'>
            <h1>Login</h1>
            <form onSubmit={formSubmit} className="login-form">
                <div>
                    <input type="radio" value="students" name="student" onChange={typeChange}/>Student
                    <input type="radio" value="teachers-admins" name="teacher-admin" onChange={typeChange}/>Teacher/Admin
                    <input type="radio" value="parents" name="parent" onChange={typeChange}/>Parent
                </div>
                <br/>
                <label>Email</label>
                <br/>
                <input type="text" name="email" onChange={formChange} />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" name="password" onChange={formChange}/>
                <br/>
                <button type="submit" id="login-button-1">Login</button>
            </form>
            </div>
        </div>
        
    )
    
}

export default Login;