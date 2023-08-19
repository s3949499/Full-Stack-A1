// Holds all page common attributes: Header, navbar, footer

import { Outlet, Link, } from "react-router-dom";

function Common(){
  return (
    <>
      
      <nav>
        <ul>
          <li>
            <Link className="navbar-link" to="/"> Home</Link>
          </li>
          <li><Link className="navbar-link" to="/SignIn">Sign In</Link></li>
          <li>
            <Link className="navbar-link" to="/SignUp">Sign Up</Link>
          </li>
       
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Common;