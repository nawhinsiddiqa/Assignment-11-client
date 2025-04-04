import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const FoodsCard = ({ food }) => {


    const { name, image, location, quantity, time, status, notes, _id } = food;

    const handleSweet = () => {
        Swal.fire("Details Page Are Here");
    }
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img 
                        src={image}
                        alt="Foods"
                        className="rounded-xl h-[160px]" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-rose-500">{name}</h2>
                    <h2 className="card-title">{location}</h2>
                    <h2 className="card-title">{time}</h2>
                    <h2 className="card-title">{status}</h2>
                    <p>{notes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/funs/${_id}`}><button onClick={handleSweet} className="btn bg-gradient-to-r from-purple-500 to-rose-600 mb-6">View Details Button</button></Link>
                    </div>
                    
                    </div>
                </div>
            </div>

        
    );
};

export default FoodsCard;