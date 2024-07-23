import React from "react";
import { Link } from "react-router-dom";

function BasicMenu() {
  return (
    <div className="flex">
      <div className="w-4/5">
        <ul className="flex gap-3">
          <li>
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/product">PRODUCT</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/5">
        <Link to="/member/login">LOGIN</Link>
      </div>
    </div>
  );
}

export default BasicMenu;
