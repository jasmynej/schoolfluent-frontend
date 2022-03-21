import axios from 'axios'
import {useState,useEffect} from 'react'


function Class ({id}){ 
    const [curClass,setClass] = useState({})

    const getClass = () => {
        axios.get(`/classes/${id}`)
        .then(function(response){
            setClass(response.data[0])
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getClass()
    },[id])
    return (
        <div>
            <h1>{curClass.name}</h1>
        </div>
    )
}

export default Class;