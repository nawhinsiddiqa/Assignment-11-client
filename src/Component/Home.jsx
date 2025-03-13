import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import Next from "./Next";
import One from "./One";
import Website from "../Website";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
         <One></One>
         <Next></Next>
         <Website></Website>
          
        </div>
    );
};

export default Home;