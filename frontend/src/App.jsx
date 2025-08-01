import { Outlet, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Menu from "./pages/Menu/Menu";

function App() {
    return (
        <div className="">
            <Nav />
            {/* <Outlet/> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/our-menu" element={<Menu />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
