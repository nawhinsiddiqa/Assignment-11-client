import { Link } from "react-router-dom";
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/99mvJMGJ/1000-F-248929619-Jk-VBYro-M1r-Srsh-WJemrcjriggud-HMUh-V.webp)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Food Zone</h1>
                        <p className="mb-5">
                          
                        </p>
                      <Link to="/avaliableFoodsPage">  <button className="btn bg-gradient-to-r from-purple-500 to-rose-600">Let's see</button></Link>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Banner;