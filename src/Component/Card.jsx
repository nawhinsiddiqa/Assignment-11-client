

const Card = ({ food }) => {
    const { name, image, location, quantity, time, status, notes } = food
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
                    <h2 className="card-title">{location}</h2>
                    <h2 className="card-title">{quantity}</h2>
                    <h2 className="card-title">{time}</h2>
                    <h2 className="card-title">{status}</h2>
                    <p>I{notes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;