import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2'
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire('User Sign Out Successfully')
                navigate('/login')
            })
            .catch(error => console.log('ERROR', error.message))
    }
    return (
        <div>
            <div>
            <motion.div
                 className="navbar bg-gradient-to-r from-purple-500 to-rose-600"  

         
         animate={{ x: 100 }}
         transition={{
             duration: 2, delay: 1, ease: "easeOut",
             repeat: Infinity
         }}>
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
                            <img className="w-12" src="https://i.ibb.co.com/yyw6v3v/images.png"></img>
                            <span className="mt-2 script">Food Zone</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-purple-800 gap-4 font-bold bottom-2">
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/avaliableFoodsPage"><li>AvaliableFoodsPage</li></NavLink>


                            {
                                user && <>

                                    <NavLink to="/addFood"><li>Add Food</li></NavLink>

                                    <NavLink to="/myFoodRequest"><li>MyFoodRequest</li></NavLink>

                                    <NavLink to="/manageMyFood"><li>ManageMyFood</li></NavLink>
                                </>
                            }

                            <NavLink to="/login"><li>Login</li></NavLink>
                            <NavLink to="/register"><li>Register</li></NavLink>




                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <span>{user.email}</span>
                                <a onClick={handleSignOut} className='btn'>Sign Out</a>
                            </>
                                :
                                <Link to="/login">Login</Link>
                        }


                        


                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default Navbar;