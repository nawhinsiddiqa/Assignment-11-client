import { useEffect, useState } from "react";
import FoodsCard from "./FoodsCard";
import axios from "axios";
const AvaliableFoodsPage = () => {
      const[foods,setFoods] =useState([]);

      useEffect(()=>{
         fetch('https://assignment-11-server-blond-omega.vercel.app/funs')
         .then(res =>res.json())
         .then(data =>setFoods(data))
      },[])
     
    return (
        <div>
            <h2 className="text-center my-7 text-5xl text-rose-500 font-bold script">All Delecious Foods Are Avaliable Here</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 w-11/12 mx-auto gap-4">
            
         {
            foods.map(food =><FoodsCard key={food._id} food={food}></FoodsCard>)
          }
         </div>
        </div>
    );
};

export default AvaliableFoodsPage;