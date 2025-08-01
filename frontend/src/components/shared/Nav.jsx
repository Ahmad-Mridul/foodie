import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
    const links = (
        <>
            <li>
                <Link to="/" className="hover:bg-[#CD9003] font-cinzel font-bold">HOME</Link>
            </li>
            <li>
                <Link to="/" className="hover:bg-[#CD9003] font-cinzel font-bold">CONTACT US</Link>
            </li>
            <li>
                <Link to="/" className="hover:bg-[#CD9003] font-cinzel font-bold">DASHBOARD</Link>
            </li>
            <li>
                <Link to="/our-menu" className="hover:bg-[#CD9003] font-cinzel font-bold">OUR MENU</Link>
            </li>
            <li>
                <Link to="/" className="hover:bg-[#CD9003] font-cinzel font-bold">OUR SHOP</Link>
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
                <a to="/" className="btn btn-outline hover:text-[#CD9003] text-xl text-white">FOODIE</a>
            </div>
            <div className="flex justify-center items-center">
                <ul className="menu menu-horizontal px-1 hidden lg:flex text-white">
                    {links}
                </ul>
                <div className="space-x-2">
                    <a className="btn">
                        <FaCircleUser />
                    </a>
                    <Link to='/' className="btn">SignOut</Link>
                    <Link to='/login' className="btn">LogIn</Link>
                    <Link to='/register' className="btn">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
