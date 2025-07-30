import { Outlet, Route, Router, Routes } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="">
            <Nav />
            {/* <Outlet/> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
