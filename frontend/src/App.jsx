import { Outlet, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";

function App() {
    return (
        <div className="">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
