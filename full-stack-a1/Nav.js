// Holds all page common attributes: Header, navbar, footer

import { Outlet, Link, } from "react-router-dom";

function Common(){
  return (
    <>
      <div class = "header-container">
       <header>
        <img class = "header-logo" src="tv.png" alt="Logo"/>
        <h1 class = "h1-header"> LOOP WEB </h1>
       </header>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link className="navbar-link" to="/">HOME</Link>
          </li>
          <li><Link className="navbar-link" to="/SignIn">SIGN IN</Link></li>
          <li>
            <Link className="navbar-link" to="/SignUp">SIGN UP</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/Profile">PROFILE</Link>
          </li>
       
        </ul>
      </nav>
      <Outlet />
      <div>
       <footer>
        <h1 class = "h1-footer"> Loop Web </h1>
        <p class = "p-footer"> Footer </p>
       </footer>
      </div>
    </>
  )
};

export default Common;