

const UpdateAction = () => {
    const handleFoodCook=(e)=>{
        e.preventDefault();
        const form= e.target;
        const name=form.name.value;
        const image =form.image.value;
        const location =form.location.value;
        const quantity=form.quantity.value;
        const time =form.time.value;
        const status =form.status.value;
        const notes = form.notes.value;
        const newFood ={_id,name,image,location,quantity,time,status,notes}
        console.log(newFood)
         // send data to the server
         fetch('http://localhost:5000/funs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newFood)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate('/avaliableFoodsPage')
            }
        })
    
      }
    return (
        <div>
            <div>
                <div>
                    <h2 className="text-4xl  script font-bold text-center my-6 text-orange-700">Manage My Food Form</h2>
                    <form onSubmit={handleFoodCook} className="card-body w-10/12 mx-auto border bg-orange-200">
                        {/* Food Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Food Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Food Name" className="input input-bordered" required />
                        </div>
                        {/* Food image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Food Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Food Image" className="input input-bordered" required />

                        </div>
                        {/* Food Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Food Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Food Location" className="input input-bordered" required />

                        </div>
                        {/* Food Quantity */}
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Food Quantity</span>
                        </label>
                        <select name="quantity" className="select select-bordered w-full my-6">
                            <option disabled selected>Food Quantity do you like?</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Bad</option>
                        </select>

                        {/* Expired time & Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Expire Time & Date</span>
                            </label>
                            <input type="number" name="time" placeholder="Expired Time" className="input input-bordered" required />

                        </div>

                        {/*  Food status */}
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Food Status</span>
                        </label>
                        <select name="status" className="select select-bordered w-full my-6">
                            <option disabled selected>Food Status</option>
                            <option>Avaliable</option>


                        </select>

                        {/* Additional Notes */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500 mx-auto ">Additional Notes</span>
                            </label>
                            <input type="text" name="notes" placeholder="Additional Notes" className="input input-bordered w-[640px] h-[200px] mx-auto" required />

                        </div>

                        <div className=" gap-4 form-control mt-6 w-[400px] mx-auto">
                            {/* <Link to={`updateAction${_id}`}><button className="btn bg-green-600">Update Button</button></Link> */}
                            <button className="btn bg-green-600 my-6">Update</button>
                        </div>
                      
                   
                    </form >

                </div >
            </div>
        </div>
    );
};

export default UpdateAction;