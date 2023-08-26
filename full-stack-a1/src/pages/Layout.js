// Holds all page common attributes: Header, navbar, footer

import { Outlet, Link, } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="header-container">
        <header>
          <img className="header-logo" src="tv.png" alt="Logo" />
          <h1 className="h1-header"> LOOP CINEMAS </h1>
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
            <Link className="navbar-link" to="/Review">REVIEWS</Link>
          </li>
          <li>
            <Link className="navbar-link" to="/Profile">PROFILE</Link>
          </li>

        </ul>
      </nav>
      <Outlet />
      <div>
        <footer>
          <h1 className="h1-footer"> Loop Cinemas </h1>
          <p className="p-footer"> 🎬 Experience the Magic of Cinema at Loop Cinemas Indulge in the ultimate cinematic adventure with state-of-the-art technology and unparalleled comfort. Discover a world of captivating stories, breathtaking visuals, and unforgettable moments on the big screen. Join us for a movie experience like no other! </p>
        </footer>
      </div>
    </>
  )
};

export default Layout;