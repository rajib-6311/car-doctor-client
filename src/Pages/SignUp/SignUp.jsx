import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const SignUp = () => {

  const { createUser } = useContext(AuthContext);

    const handelSignUp = event => {
      event.preventDefault();
      
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,email,password);

      createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
      .catch(error=>console.log(error))
      }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-20">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelSignUp} className="card-body">
            <h1 className="text-3xl font-bold text-center text-green-600">
              SignUp now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
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
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-error" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center text-white my-5">
            Already have an account?
            <Link to="/login" className="text-green-600 font-bold my-5">
             Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
