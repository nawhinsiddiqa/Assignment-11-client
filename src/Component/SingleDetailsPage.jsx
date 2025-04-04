import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const SingleDetailsPage = () => {

    const handleRequest = () => {
        document.getElementById('my_modal_1').showModal()

        {/* Open the modal using document.getElementById('ID').showModal() method */ }





    }

  
  
    
    const { name, image, location, quantity, time, status, notes, _id } = useLoaderData();

    return (
        <div>
            <h2 className="text-4xl text-center text-rose-500 script my-3">Details For Delicious Food Here</h2>
            <div>
                <div className="card card-side bg-base-100 shadow-xl w-9/12 mx-auto my-10">
                    <figure>
                        <img className="mb-5"
                            src={image}
                            alt="food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-purple-800">{name}</h2>
                        <span className="font-bold"><p>Location:{location}</p></span>
                        <span className="font-bold"> <p>Expired:{time}</p></span>
                        <span className="font-bold"><p>Status:{status}</p></span>
                        <span className="font-bold"><p>Notes:{notes}</p></span>

                        <dialog Id="my_modal_1" className="modal">

                            <div className="modal-box">
                                <h3 className="font-bold text-lg"> Following Input Field</h3>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <form className="card-body">
                                            <div className="form-control mx-auto">
                                                <label className="label">
                                                    <span className="label-text">Food Name</span>
                                                </label>
                                                <input type="text" defaultValue={name}placeholder="FoodName" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">FoodImage</span>
                                                </label>
                                                <input type="text"  defaultValue={image}placeholder="FoodImage" className="input input-bordered" required />

                                            </div>
                                            <div className="form-control mx-auto">
                                                <label className="label">
                                                    <span className="label-text">FoodId</span>
                                                </label>
                                                <input type="text" defaultValue={_id}placeholder="FoodId" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control mx-auto">
                                                <label className="label">
                                                    <span className="label-text">FoodDonatorName</span>
                                                </label>
                                                <input type="text"  defaultValue={name}placeholder="FoodDonatorName" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control mx-auto">
                                                <label className="label">
                                                    <span className="label-text">FoodDonatorEmail</span>
                                                </label>
                                                <input type="email"placeholder="FoodDonatorEmail" className="input input-bordered" required />
                                            </div>
                                            <label className="label">
                                                <span className="label-text text-xl font-bold ">Food Status</span>
                                            </label>
                                            <select name="status"  defaultValue={status} className="select select-bordered w-full my-6">
                                                <option disabled selected>Food Status</option>
                                                <option>Requested</option>


                                            </select>
                                            <textarea className="textarea textarea-ghost" placeholder="Notes"></textarea>
                                            <div className="form-control mt-6">
                                                <button className="btn bg-gradient-to-r from-purple-500 to-rose-600">Submit Here</button>
                                            </div>
                                        </form>
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>



                        </dialog>

                        <div className="card-actions justify-end">


                           

                            <button onClick={() => handleRequest()} className="btn bg-gradient-to-r from-purple-500 to-rose-600">Request Button</button>
                            
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SingleDetailsPage;