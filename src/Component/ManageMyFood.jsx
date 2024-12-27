
import { Link } from "react-router-dom";
import ShowCard from "./ShowCard";



import { useEffect, useState } from "react";
const ManageMyFood = () => {
    const[foods,setFoods] =useState([]);

    useEffect(()=>{
       fetch('http://localhost:5000/funs')
       .then(res =>res.json())
       .then(data =>setFoods(data))
    },[])
    
        
    return (
       <div>
         <h2 className="text-center my-5 text-3xl text-slate-600 font-bold script">Manage My Food Section</h2>
           <div className=" my-10 w-9/12 mx-auto gap-4 mb-6">
            
            {
               foods.map(food =><ShowCard key={food._id} food={food}></ShowCard>)
             }
            </div>   
       </div> 
    )
};

export default ManageMyFood;


   
        