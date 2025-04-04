import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const ShowCard = ({ food }) => {
    const { name, image, location, quantity, time, status, notes, _id } = food;
      const handleUpdate = () => {
            Swal.fire("Update form are here")
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
        
        
                        fetch(`https://assignment-11-server-blond-omega.vercel.app/funs/${_id}`, {
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
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-6">
                <figure>
                    <img className="h-40"
                        src={image}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-purple-600">{name}</h2>
                    <p className="">{location}</p>
                    <p>{quantity}</p>
                    <p>{time}</p>
                    <p>{status}</p>
                    <p>{notes}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/updateAction/${_id}`}><button onClick={handleUpdate} className="btn bg-purple-600">UpdateAction</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-rose-500">Delete Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;