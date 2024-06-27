import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

import { AuthContext } from '../../Provider/Provider';
import { useContext } from 'react';
import axios from 'axios';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const Navigate = useNavigate();
  
  const handelLogin = event => {
    event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
    // console.log(email, password);
    
    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        // Navigate(location?.state ? location?.state:'/')
        // get access token
        axios.post('http://localhost:5000/jwt', user)
          .then(res => {
          console.log(res.data);
        })
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
        <form onSubmit={handelLogin} className="card-body">
        <h1 className="text-3xl font-bold text-center text-green-600">Login now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">             
            <input className='btn btn-error' type="submit" value="Login" />
        </div>
            </form>
            <p className='text-center text-white'>New to car doctor?<Link
              to='/signup'
              className='text-green-600 font-bold my-5'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;