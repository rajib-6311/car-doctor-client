
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, price } = service;
    const { user } = useContext(AuthContext);

    const handelBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName: name,
            email,
            date,
            // service:_id,
            price:price
            
        }
        console.log(order);
  
    }
 
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Book Services : <span className="text-orange-500">{title}</span></h1>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handelBookService} className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name ;</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={'$'+price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-error" type="submit" value="Oder confirm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
