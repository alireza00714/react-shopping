import React from "react";
import "./header.css";

function Header({ title = "My React Shop" }) {
  return (
    <header className="w-100 d-flex align-items-center justify-content-center mb-3">
      <h2 className="text-white m-0">{title}</h2>
    </header>
  );
}

export default Header;
