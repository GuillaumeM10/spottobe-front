import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <div className="nav flex justify-between bg-gray-200 p-4 absolute bottom-0 w-full z-[999]">
        <Link to="/">home</Link>
        <Link to="/events">events</Link>
        <Link to="/messages">messages</Link>
        <Link to="/parcourir">parcourir</Link>
        <Link to="/points">points</Link>
      </div>
    </div>
  );
};

export default Layout;
