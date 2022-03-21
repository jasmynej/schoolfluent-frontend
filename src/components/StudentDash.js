import axios from 'axios'
import {useState,useEffect} from 'react'
import Class from './Class'
function StudentDash({student_id}){
    const [student,setStudent] = useState({})
    const [classes,setClasses] = useState([])
    const getStudentInfo = () => {
        axios.get(`/students/${student_id}`)
        .then(function(response){
            setStudent(response.data[0])
        })
        .catch(err => console.log(err))


        axios.get(`/students/${student_id}/classes`)
        .then(function(response){
            console.log(response.data)
            setClasses(response.data)
        })
        .catch(err=> console.log(err))
    }

    useEffect(() => {
        getStudentInfo()
    },[])

    var classList = classes.map((registration) => 
            <Class id={registration.class_id}/>
    
    )
    return (
        <div className='dashboard-main'>
            <div className='main-info'>
                <h1>{student.first_name} {student.last_name}</h1>
                <p>Student ID Number: 1000{student.id}</p>
                <p>{student.email}</p>
                <p>Grade: {student.grade}</p>  
            </div>
            <div className='classes'>
                <ul>
                    {classList}
                </ul>
            </div>
        </div>
    )
}

export default StudentDash;