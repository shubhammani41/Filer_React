import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../Global/NotFound/NotFound";
import { Home } from "./Home/Home";

function Dashboard() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="home" />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}

export default Dashboard;