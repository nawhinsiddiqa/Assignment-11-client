import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const Card = ({ food }) => {
    const { name, image, location, quantity, time, status, notes } = food

    const handleView = () => {
        Swal.fire("All Delicious Food's Page")
    }
    return (
        <div>


          
            <div className="card bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img className="w-[166px]"
                        src={image}
                        alt="Foods" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{name}</h2>
                    <h2 className="card-title">Location:{location}</h2>
                    <h2 className="card-title">Food Quantity:{quantity}</h2>
                    <h2 className="card-title">Expired:{time}</h2>
                    <h2 className="card-title">Status:{status}</h2>
                    {/* <p>I{notes}</p> */}
                    <div className="card-actions justify-end">
                        <Link to="/avaliableFoodsPage"> <button onClick={handleView} className="btn bg-gradient-to-r from-purple-500 to-rose-600">A Show All</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;