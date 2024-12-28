import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
const FeaturedFoods = () => {

  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/funs')
      .then(res => res.json())
      .then(data => setFoods(data.slice(0, 6)))
  }, [])
   return (
    <div>
      <h2 className="text-4xl text-center text-amber-600 script my-3"> Featured  Data Are Here:{foods.length}</h2>
      <p className="text-center my-5">We take into account five universal criteria: the quality of the ingredients, the harmony of flavours, the mastery of techniques,<br></br> the personality of the chef as expressed through their cuisine and, just as importantly, consistency both across the entire menu and over time</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4 my-6">
        {
          foods.map(food => <Card key={food._id} food={food}></Card>)

        }
      </div>

    </div>
  );
};

export default FeaturedFoods;
