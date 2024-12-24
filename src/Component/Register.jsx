import Lottie from "lottie-react";
import Swal from 'sweetalert2'
import registerLottie from "../assets/register.json";
import AuthContext from "../AuthContext/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, password, name, photo)
        setErrorMessage('');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase,one lower case and length 6 character')
            return;
        }

        createUser(email, password)
            .then(result => {
                Swal.fire("Successfully Registered")
                console.log(result.user)
                setTimeout(() => {
                    navigate('/')
                }, 1000)


            })
            .catch(error => {

                setErrorMessage(error.message);
                Swal.fire("At least one uppercase,one lower case and length 6 character")
                console.log(error.message)
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
                <h1 className="text-4xl font-bold text-center my-7 text-green-600">Register now!!!!</h1>

                <div className="hero bg-base-200 min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className=" ml-8 mt-4 text-center lg:text-left w-[400px]">


                            <Lottie animationData={registerLottie}
                            ></Lottie>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                                </div>
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
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>


                            <p className="ml-4 mb-4 mr-4 font-bold">
                                Already Have an account?please<Link to="/login"><span className="text-green-700 font-bold mr-3">Login</span></Link>

                            </p>
                            <p>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn bg-amber-500 w-full mx-auto text-black">Google</button>
                            </p>
                            {
                                errorMessage && <p className="text-red-700 p-4">{errorMessage}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;