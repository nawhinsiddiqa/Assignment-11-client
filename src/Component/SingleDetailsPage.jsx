import { useLoaderData } from "react-router-dom";


const SingleDetailsPage = () => {
    const { name, image, location, quantity, time, status, notes ,_id} = useLoaderData();

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
                            <button className="btn bg-yellow-200">Request Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetailsPage;