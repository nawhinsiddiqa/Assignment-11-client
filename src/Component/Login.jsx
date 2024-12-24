import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import loginBanner from '../assets/Login.json'
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
    const { signInUser,signInWithGoogle } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signInUser(email, password)
            .then(result => {
                Swal.fire("Successfully Logged in")
                console.log(result.user)
                setTimeout(() => {
                    navigate('/')
                }, 1000)

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })


    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center my-7 text-amber-500">Login now!!!</h1>

                <div className="hero bg-base-200 min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className=" ml-8 mt-4 text-center lg:text-left w-[400px]">


                            <Lottie animationData={loginBanner}
                            ></Lottie>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form onSubmit={(e) => handleLogin(e)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="ml-4 mb-4 mr-4 font-bold">
                                Welcome to this website?please <Link to="/register"><span className="text-green-600">Register</span></Link>

                            </p>
                            <p>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn bg-slate-500 w-full mx-auto text-black">Google</button>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;