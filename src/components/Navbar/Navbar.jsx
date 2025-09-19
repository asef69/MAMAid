import userStore from "@/state/userState";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    const { user } = userStore();
    return(
        <div className="navbar bg-base-100 shadow-sm text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Emergency</a></li>
                    <li>
                    <a>Dad</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={()  => navigate("/")}>MAMAid</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li onClick={() => navigate("/about-us")}><a>About Us</a></li>
                    <li onClick={() => navigate("/emergency")}><a>Emergency</a></li>
                    <li onClick={() => navigate("/contact-us")}><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="w-[800px] flex gap-5">
                <div className="navbar-end" onClick={() => navigate('/login')}>
                    <a className="btn">Signin/Register</a>
                </div>
                {
                    user && <div className="navbar-end" onClick={() => navigate('/dashboard')}>
                        <a className="btn">Dashboard</a>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;