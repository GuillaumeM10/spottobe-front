import React from "react";
import BackIcon from "../assets/BackIcon";
import { useNavigate } from "react-router-dom";
const NotificationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notifications-page">
      <div className="head flex items-baseline gap-[40px] mt-[42px] mx-[54px]">
        <button className="back cursor-pointer" onClick={() => navigate(-1)}>
          <BackIcon className="h-[20px]" />
        </button>
        <h1 className="text-[24px] font-bold">Notifications</h1>
      </div>

      <p className="mx-[54px] mt-[100px]">Vous n'avez aucune notification.</p>
    </div>
  );
};

export default NotificationsPage;
