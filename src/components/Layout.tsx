import React from "react";
import { Link } from "react-router-dom";
import PointsIcon from "../assets/layout/PointsIcon";
import ParcourirIcon from "../assets/layout/ParcourirIcon";
import MessagesIcon from "../assets/layout/MessagesIcon";
import HomeIcon from "../assets/layout/HomeIcon";
import EventsIcon from "../assets/layout/EventsIcon";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <div className="nav flex justify-between bg-white p-4 absolute bottom-0 w-full z-[999]">
        <Link className="nav-link" to="/">
          <HomeIcon />
          home
        </Link>
        <Link className="nav-link" to="/points">
          <PointsIcon />
          points
        </Link>
        <Link className="nav-link" to="/parcourir">
          <ParcourirIcon />
          parcourir
        </Link>
        <Link className="nav-link" to="/messages">
          <MessagesIcon />
          messages
        </Link>
        <Link className="nav-link" to="/events">
          <EventsIcon />
          events
        </Link>
      </div>
    </div>
  );
};

export default Layout;
