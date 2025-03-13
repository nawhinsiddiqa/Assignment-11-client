import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const UpdateAction = () => {
    const navigate =useNavigate();
    const{ name, image, location, quantity, time, status, notes ,_id}=useLoaderData();
           
    
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
        const updatedFood ={name,image,location,quantity,time,status,notes}
        console.log(updatedFood)
         // send data to the server
         fetch(`https://assignment-11-server-blond-omega.vercel.app/funs/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedFood)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'success!',
                    text: 'Food Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate('/')
            }
        })
       
      }

    
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <div>
                    <h2 className="text-4xl  script font-bold text-center my-6 text-orange-700">Manage My Food Form</h2>
                    <form onSubmit={handleFoodCook} className="card-body w-10/12 mx-auto border bg-orange-200">
                        {/* Food Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500">Food Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name}  placeholder="Food Name" className="input input-bordered" required />
                        </div>
                        {/* Food image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Food Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={image}  placeholder="Food Image" className="input input-bordered" required />

                        </div>
                        {/* Food Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-tex text-xl font-bold text-lime-500">Food Location</span>
                            </label>
                            <input type="text" name="location" defaultValue={location}  placeholder="Food Location" className="input input-bordered" required />

                        </div>
                        {/* Food Quantity */}
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Food Quantity</span>
                        </label>
                        <select name="quantity" defaultValue={quantity} className="select select-bordered w-full my-6">
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
                            <input type="number" name="time" defaultValue={time}  placeholder="Expired Time" className="input input-bordered" required />

                        </div>

                        {/*  Food status */}
                        <label className="label">
                            <span className="label-text text-xl font-bold text-lime-500">Food Status</span>
                        </label>
                        <select name="status" defaultValue={status}  className="select select-bordered w-full my-6">
                            <option disabled selected>Food Status</option>
                            <option>Avaliable</option>


                        </select>

                        {/* Additional Notes */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-lime-500 mx-auto ">Additional Notes</span>
                            </label>
                            <input type="text" name="notes" defaultValue={notes} placeholder="Additional Notes" className="input input-bordered w-[640px] h-[200px] mx-auto" required />

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