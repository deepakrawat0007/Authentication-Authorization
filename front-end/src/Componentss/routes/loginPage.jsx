import "./file.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const API = "http://localhost:5000"


const LoginPage = () =>{
    const navigate = useNavigate("/")
    const [data , setData] = useState({
        email:"",
        password:""    
    })
    const handleChange =(e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(API+"/login" , {
            email:data.email,
            password:data.password
        })
        .then((res)=>{
            alert("Login Success")
            localStorage.setItem("token" , res.data.token)
            localStorage.setItem("name",res.data.name)
            navigate("/order")
        }).catch((e)=>{
            alert(e.response.data)
        })

    }
    const handleRoute =()=>{
        navigate("/")
    }
    return (
        <>
        <div className="Wrapper">
        <form>
                <h1>Login-Page</h1>
                <input type={"email"}  id="email" value={data.email} onChange={(e)=>{handleChange(e)}} placeholder="Enter Email"/>
                <input type={"password"} id="password" value={data.password} onChange={(e)=>{handleChange(e)}} placeholder="Enter Password"/>
                <button onClick={(e)=>{handleSubmit(e)}}>Sign-In</button>
                <p onClick={handleRoute}>Register As a new User?</p>
            </form>

        </div>
        </>
    )
}

export default LoginPage