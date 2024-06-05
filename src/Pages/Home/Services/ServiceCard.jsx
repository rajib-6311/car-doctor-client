import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title,img,price,} = service;
  return (
    <div className="card h-96 w-96 bg-base-100 shadow-xl ">
      <figure>
        <img className="h-56"
          src={img}
         
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-500">{title}</h2>
              {/* <p>{description}</p> */}
              <p className="text-orange-500">Price : { price}</p>
        <Link to={`/checkout/${_id}`}>
        <button className="btn btn-error">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
