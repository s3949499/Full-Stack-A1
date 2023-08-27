import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
    {/* lists the webpages avaliable from the homepage*/}
      <ul>
        <li>
          <Link className="navbar-link" to="/">HOME</Link>
        </li>
        <li>
            <Link className="navbar-link" to="/SignIn">SIGN IN</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/SignUp">SIGN UP</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/Profile">PROFILE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;