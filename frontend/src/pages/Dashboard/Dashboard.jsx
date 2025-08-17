import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "/odor.png";
import { FaEdit, FaHome, FaMailBulk } from "react-icons/fa";
import "./Dashboard.css";
import {
    FaCartShopping,
    FaPlus,
    FaShop,
    FaSpoon,
    FaUser,
} from "react-icons/fa6";
import useAuth from "../../context/useAuth";
import useUsers from "../../hooks/useUsers";
const DashBoard = () => {
    const { user } = useAuth();
    const [users] = useUsers();
    const loggedUser = users.find((u) => u.email === user.email);

    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FOODIE | Dashboard</title>
            </Helmet>
            <div className="flex">
                <div className="w-[280px] p-5 h-screen bg-[#D1A054] fixed">
                    <div className="flex">
                        <img src={logo} alt="" className="w-8" />
                        <h2 className="text-white text-4xl font-bold font-cinzel">
                            Foodie
                        </h2>
                    </div>
                    <div className="pt-10">
                        <nav>
                            <ul className="menu space-y-2">
                                {loggedUser?.role === "admin" ? (
                                    <>
                                        <li>
                                            <NavLink to="/dashboard/home">
                                                <FaHome />
                                                Admin Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/add-item">
                                                <FaPlus />
                                                Add Items
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/manage-items">
                                                <FaEdit />
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
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink to="/dashboard/cart">
                                                <FaCartShopping />
                                                User Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/cart">
                                                <FaCartShopping />
                                                Reservation
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/cart">
                                                <FaCartShopping />
                                                Payment History
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/cart">
                                                <FaCartShopping />
                                                My Cart
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/add-item">
                                                <FaPlus />
                                                Add Review
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/manage-items">
                                                <FaEdit />
                                                My Booking
                                            </NavLink>
                                        </li>
                                    </>
                                )}

                                {/* user */}

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
                <div className=" p-10 flex-1 ml-[280px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
