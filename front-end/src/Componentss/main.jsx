import {BrowserRouter , Routes , Route} from "react-router-dom"
import LoginPage from "./routes/loginPage"
import Order from "./routes/Orderpage"
import RegistrationPage from "./routes/RegistrationPage"
const Main = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/order" element={<Order/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Main