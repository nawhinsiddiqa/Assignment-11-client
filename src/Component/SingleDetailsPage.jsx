import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const SingleDetailsPage = () => {

    const handleRequest = () => {
        <form class="card-body">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
                <label class="label">
                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>

        {/* Open the modal using document.getElementById('ID').showModal() method */ }

        <dialog id="handleRequest" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>




    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/funs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }
    const handleUpdate = () => {
        Swal.fire("Update form are here")
    }
    const { name, image, location, quantity, time, status, notes, _id } = useLoaderData();

    return (
        <div>
            <h2 className="text-4xl text-center text-amber-600 script my-3">Details For Delicious Food Here</h2>
            <div>
                <div className="card card-side bg-base-100 shadow-xl w-9/12 mx-auto my-10">
                    <figure>
                        <img className="mb-5"
                            src={image}
                            alt="food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-green-800 border p-4 bg-gradient-to-r from-orange-400 to-rose-400">{name}</h2>
                        <span className="font-bold"><p>Location:{location}</p></span>
                        <span className="font-bold"> <p>Expired:{time}</p></span>
                        <span className="font-bold"><p>Status:{status}</p></span>
                        <span className="font-bold"><p>Notes:{notes}</p></span>
                        <div className="card-actions justify-end">


                            <Link to={`/updateAction/${_id}`}><button onClick={handleUpdate} className="btn bg-green-600">UpdateAction</button></Link>

                            <button onClick={() => handleRequest()} className="btn bg-yellow-200">Request Button</button>
                            <button onClick={() => handleDelete(_id)} className="btn bg-red-600">Delete Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetailsPage;