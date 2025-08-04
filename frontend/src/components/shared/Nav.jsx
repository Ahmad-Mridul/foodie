import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { BsBagPlus } from "react-icons/bs";
const Nav = () => {
    const { user, userSignOut } = useAuth();

    const links = (
        <>
            <li>
                <Link
                    to="/"
                    className="hover:bg-[#CD9003] font-cinzel font-bold"
                >
                    HOME
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className="hover:bg-[#CD9003] font-cinzel font-bold"
                >
                    CONTACT US
                </Link>
            </li>
            <li>
                <Link
                    to="/"
                    className="hover:bg-[#CD9003] font-cinzel font-bold"
                >
                    DASHBOARD
                </Link>
            </li>
            <li>
                <Link
                    to="/menu"
                    className="hover:bg-[#CD9003] font-cinzel font-bold"
                >
                    OUR MENU
                </Link>
            </li>
            <li>
                <Link
                    to="/shop"
                    className="hover:bg-[#CD9003] font-cinzel font-bold"
                >
                    OUR SHOP
                </Link>
            </li>
        </>
    );
    return (
        <div className=" bg-black/50 absolute z-10 w-full shadow-sm flex justify-between items-center p-2">
            <div className="">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="btn btn-outline hover:text-[#CD9003] text-xl text-white"
                >
                    FOODIE
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <ul className="menu menu-horizontal px-1 hidden lg:flex text-white justify-center items-center">
                    {links}
                </ul>
                <div className="space-x-2">
                    {user ? (
                        <div className="space-x-2">
                            <button className="btn">
                                <BsBagPlus />{" "}
                                <div className="badge badge-sm badge-secondary">
                                    0
                                </div>
                            </button>
                            <details className="dropdown dropdown-end">
                                <summary className="btn">
                                    <FaCircleUser />
                                </summary>
                                <ul className="menu mt-2 dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li>
                                        <p className="">
                                            {user?.displayName
                                                ? user?.displayName
                                                : user?.email}
                                        </p>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => userSignOut()}
                                            className="btn"
                                        >
                                            SignOut
                                        </button>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    ) : (
                        <div className="space-x-2">
                            <Link to="/login" className="btn">
                                LogIn
                            </Link>
                            <Link to="/register" className="btn">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
