import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom mb-4">
      <div className="container-fluid container">
        <a className="navbar-brand" href="/">
          <img
            src="/logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          hatimim
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
