import React from "react";
import { Routes, Route } from "react-router-dom";
import DevfastLanding from "./page/home";
import LandingSample from "./page/sample/landing";
import WebAppDashboardSample from "./page/sample/web";
import CanelsaHotelLanding from "./page/sample/business";
import LoreCafeLanding from "./page/sample/LoreCafeLanding";
import ContractorLanding from "./page/sample/enginner";
import EventsWebinarLanding from "./page/sample/events";


export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<DevfastLanding />} />

      {/* Sample Projects */}
      <Route path="/samples/landing" element={<LandingSample />} />
      <Route path="/samples/business" element={<CanelsaHotelLanding />} />
      <Route path="/samples/webapp" element={<WebAppDashboardSample />} />
      <Route path="/samples/lorecafe" element={<LoreCafeLanding />} />
      <Route path="/samples/engineer" element={<ContractorLanding />} />
      <Route path="/samples/events/webinar" element={<EventsWebinarLanding />} />
      
    

      {/* 404 Fallback (optional but recommended) */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
            <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}
