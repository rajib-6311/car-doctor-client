import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/Provider";

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => { })
    .catch(error =>console.log(error))
  }

  const NavItem = (
    <>
      <li>
        <NavLink to="/">
          <span className="text-green-500 font-bold">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <span className="text-green-500 font-bold">About</span>
        </NavLink>
      </li>
      {user?.email ? <>
        <li><Link to='/bookings'>My bookings</Link></li>
        <li><button onClick={handleLogOut}>log Out</button></li>
      </> :
      <li>
        <NavLink to="/login">
          <span className="text-green-500 font-bold">Login</span>
        </NavLink>
      </li>
     
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="h-12" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItem}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
