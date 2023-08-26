import React from "react";

{/* header for all pages. Complete with logo and company name */}
function Header() {
  return (
    <div className="header-container">
      <header>
        <img className="header-logo" src="tv.png" alt="Logo" />
        <h1 className="h1-header"> LOOP CINEMAS </h1>
      </header>
    </div>
  );
}

export default Header;