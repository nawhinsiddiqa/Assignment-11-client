import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const Card = ({ food }) => {
    const { name, image, location, quantity, time, status, notes } = food

    const handleView=()=>{
        Swal.fire("All Delicious Food's Page")
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-9">
                <figure>
                    <img className="h-[166px]"
                        src={image}
                        alt="foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-green-700 border p-4">{name}</h2>
                    <h2 className="card-title">Location:{location}</h2>
                    <h2 className="card-title">Food Quantity:{quantity}</h2>
                    <h2 className="card-title">Expired:{time}</h2>
                    <h2 className="card-title">Status:{status}</h2>
                    {/* <p>I{notes}</p> */}
                    <div className="card-actions justify-end">
                       <Link to="/avaliableFoodsPage"> <button  onClick={handleView}className="btn bg-amber-300">A Show All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;