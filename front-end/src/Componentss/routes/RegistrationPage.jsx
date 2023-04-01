import { useState } from "react"
import axios from "axios"
import "./file.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000"
const RegistrationPage = ()=>{
    const navigate = useNavigate("/")
    const [data , setData] = useState({
        name:"",
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
        axios.post(API+"/registration" , {
            name:data.name,
            email:data.email,
            password:data.password
        })
        .then((res)=>{
            alert("Registration Success")
            navigate("/login")
        }).catch((e)=>{
            alert(e.response.data)
        })

    }
    const handleRoute =()=>{
        navigate("/login")
    }
    return(
        <>
        <div className="Wrapper">
            <form>
                <h1>Registration-Page</h1>
                <input type={"text"} id="name" value={data.name} onChange={(e)=>{handleChange(e)}} placeholder="Enter Name"/>
                <input type={"email"}  id="email" value={data.email} onChange={(e)=>{handleChange(e)}} placeholder="Enter Email"/>
                <input type={"password"} id="password" value={data.password} onChange={(e)=>{handleChange(e)}} placeholder="Enter Password"/>
                <button onClick={(e)=>{handleSubmit(e)}}>Sign-Up</button>
                <p onClick={handleRoute}>Login?</p>
            </form>

        </div>
        </>
    )
}
export default RegistrationPage;