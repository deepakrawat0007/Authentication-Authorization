import { useEffect } from "react"
import "./file.css"
import { useNavigate } from "react-router-dom"
const Order  =()=>{
const navigate = useNavigate("/")
useEffect(()=>{
if(!localStorage.getItem("token")){
    navigate("/login")
}
},[])
const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    navigate("/login")
}
    return (
<>
<div className="header">
    <h1>Hello {localStorage.getItem("name")}</h1>
    <button onClick={handleLogout}>Logout</button>
</div>
</>
    )

}

export default Order