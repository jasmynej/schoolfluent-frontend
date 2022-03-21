
import '../styles/dashboard.css'
import {authService} from "../services/auth"
import { useNavigate } from "react-router-dom";


import TeacherDash from '../components/TeacherDash';
import StudentDash from '../components/StudentDash';
import ParentDash from '../components/ParentDash';
function Dashboard(){
    let navigate = useNavigate();
    let user_type = localStorage.getItem("userType")
    let user_id = localStorage.getItem("userId")
    const logout = () => {
        navigate("/")
        authService.logout()
    }
    if(user_type === "students"){
        return (
            <div>
                <StudentDash student_id={user_id}/>
                <button onClick={logout}>log out</button>
            </div>
            
        )
    }
    else if(user_type === "teachers-admins"){
        <TeacherDash teacher_id={user_id}/>
    }
    else if(user_type === "parents"){
        <ParentDash parent_id={user_id} />
    }
    return(
        <div>
            <h1>{user_type}</h1>
            <button onClick={logout}>log out</button>
        </div>
        
    )
}

export default Dashboard;