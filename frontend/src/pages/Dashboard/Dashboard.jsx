import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "/odor.png";
import { FaEdit, FaHome, FaMailBulk } from "react-icons/fa";
import "./Dashboard.css";
import { FaBowlFood, FaCartShopping, FaFileContract, FaPlus, FaShop, FaSpoon, FaUser } from "react-icons/fa6";
const Dashoard = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FOODIE | Dashboard</title>
            </Helmet>
            <div className="flex">
                <div className="w-70 p-5 h-screen bg-[#D1A054]">
                    <div className="flex">
                        <img src={logo} alt="" className="w-8" />
                        <h2 className="text-white text-4xl font-bold font-cinzel">
                            Foodie
                        </h2>
                    </div>
                    <div className="pt-10">
                        <nav>
                            <ul className="menu space-y-2">
                                <li>
                                    <NavLink to="/dashboard/home">
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaCartShopping />
                                        Cart Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add-item">
                                        <FaPlus/>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-items">
                                        <FaEdit  />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-bookings">
                                        <FaEdit />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-users">
                                        <FaUser />
                                        All Users
                                    </NavLink>
                                </li>
                                <hr />
                                <li>
                                    <NavLink to="/">
                                        <FaHome />
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu">
                                        <FaSpoon />
                                        Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop">
                                        <FaShop />
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">
                                        <FaMailBulk />
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashoard;
