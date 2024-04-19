import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";





const index = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} /> 
            <Route path="/User" element={<User />} /> 
        </Routes>
    )
}
export default index;