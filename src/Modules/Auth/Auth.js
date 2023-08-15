import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import NotFound from "../Global/NotFound/NotFound";
import Register from "./Register/Register";

function Auth() {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}

export default Auth;