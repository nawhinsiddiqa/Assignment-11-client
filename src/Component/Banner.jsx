
import { motion } from "motion/react"
const Banner = () => {
    return (
         <motion.div

         
         animate={{ x: 100 }}
         transition={{
             duration: 2, delay: 1, ease: "easeOut",
             repeat: Infinity
         }}>

       
            <img className="w-[1200px]  mx-auto my-8 " src ="https://i.ibb.co.com/GQ4rG7f/food-website-templates-kadil.jpg"></img>
        
        </motion.div>
    );
};

export default Banner;