import axios from 'axios'
export const authService = {
    login,
    logout
}
function login (email,password,type){
    axios.post(`/${type}/login`,{
        email:email,
        password:password
    })
    .then(function(response){
        console.log(response.data)
        if(response.data.msg === undefined){
            console.log("logging in")
            localStorage.setItem("userType",type)
            localStorage.setItem("userId",response.data[0].id)
            localStorage.setItem("loggedIn",true)
            return true
        }
        else{
            localStorage.setItem("loggedIn",false)
            console.log(response.data.msg)
            return false
        }
        
    })
    .catch(err => console.log(err))
}

function logout() {
    
    localStorage.removeItem("userType")
    localStorage.removeItem("userId")
    localStorage.removeItem("loggedIn")
}

