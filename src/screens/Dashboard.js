import {useState} from 'react'
import {authService} from "../services/auth"
import { useNavigate } from "react-router-dom";
function Dashboard(){
    let navigate = useNavigate();
    let user_type = localStorage.getItem("userType")

    const logout = () => {
        navigate("/")
        authService.logout()
    }
    return(
        <div>
            <h1>{user_type}</h1>
            <button onClick={logout}>log out</button>
        </div>
        
    )
}

export default Dashboard;