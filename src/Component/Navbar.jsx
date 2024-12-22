import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                <NavLink to="/login"><li><a>Login</a></li></NavLink>
                                <NavLink to="/register"><li><a>Register</a></li></NavLink>

                            </ul>
                        </div>
                        <a className="flex text-3xl font-bold text-rose-600">
                            <img  className="w-12" src ="https://i.ibb.co.com/yyw6v3v/images.png"></img>
                            <span className="mt-2 script">Food Zone</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-purple-800 font-bold bottom-2">

                            <NavLink to="/login"><li><a>Login</a></li></NavLink>
                            <NavLink to="/register"><li><a>Register</a></li></NavLink>
                            <NavLink to="/about"><li><a>About</a></li></NavLink>
                            <NavLink to="/"><li><a>Home</a></li></NavLink>


                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* {
                            user ? <> */}

                                <button  className="btn text-purple-700">Sign out</button>

                            {/* </> */}

                                {/* : <>
                                    <Link to="/logIn">

                                        <button className="btn">Login In</button>


                                    </Link> */}



                                {/* </> */}
                        {/* } */}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;