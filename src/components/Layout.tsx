import React from "react";
import { Link, useLocation } from "react-router-dom";
import PointsIcon from "../assets/layout/PointsIcon";
import ParcourirIcon from "../assets/layout/ParcourirIcon";
import MessagesIcon from "../assets/layout/MessagesIcon";
import HomeIcon from "../assets/layout/HomeIcon";
import EventsIcon from "../assets/layout/EventsIcon";
import { useState } from "react";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const location = useLocation();
    const [page, setPage] = useState("");
    useEffect(() => {
      let path = location.pathname.split("/").join(" ");
      setPage(path);
    }, [location]);

  return (
          <div
            className={`main relative ${location.pathname === "/" ? "home" : page}`}
          >
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
    </div>
  );
};

export default Layout;
