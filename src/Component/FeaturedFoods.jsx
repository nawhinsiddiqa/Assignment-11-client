import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const FeaturedFoods = () => {

   const[foods,setFoods] =useState([])
   useEffect(()=>{
            fetch('http://localhost:5000/funs')
            .then(res =>res.json())
            .then(data =>setFoods(data.slice(0,6)))
         },[])
    
    return (
        <div>
         <h2>All  Data Are Here:{foods.length}</h2>
        </div>
    );
};

export default FeaturedFoods;
