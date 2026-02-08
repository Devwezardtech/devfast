import React from "react";
import { Routes, Route } from "react-router-dom";
import DevfastLanding from "./page/home";
import LandingSample from "./page/sample/landing";
import BusinessWebsiteSample from "./page/sample/business";
import WebAppDashboardSample from "./page/sample/web";


export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<DevfastLanding />} />

      {/* Sample Projects */}
      <Route path="/samples/landing" element={<LandingSample />} />
      <Route path="/samples/business" element={<BusinessWebsiteSample />} />
      <Route path="/samples/webapp" element={<WebAppDashboardSample />} />
    

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
