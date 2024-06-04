import img from '../../assets/images/login/login.svg'

const Login = () => {
  const handaleLogin = event => {
    event.preventDefault();
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-20">
      <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handaleLogin} className="card-body">
        <h1 className="text-3xl font-bold text-center text-green-600">Login now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">             
            <input className='btn btn-error' type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;