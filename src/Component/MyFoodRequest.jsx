import React from 'react';

import { useState,useEffect } from 'react';

const MyFoodRequest = () => {
    const [foods,setFoods] =useState([]);
    const {user} =useAuth();
    useEffect(()=>{
            fetch(`https://assignment-11-server-blond-omega.vercel.app/funs?email=${user.email}`)
            .then(res =>res.json())
            .then(data =>setFoods(data))
    },[user.email])
    return (
        <div>
            {foods.length}
        </div>
    );
};

export default MyFoodRequest;
