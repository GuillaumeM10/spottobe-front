import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import MessagePage from "../pages/MessagePage";
import ParcourirPage from "../pages/ParcourirPage";
import PointsPage from "../pages/PointsPage";
import SingleEventPage from "../pages/SingleEventPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<SingleEventPage />} />

      <Route path="/messages" element={<MessagePage />} />
      <Route path="/parcourir" element={<ParcourirPage />} />
      <Route path="/points" element={<PointsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
