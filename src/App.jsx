import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Appointment from "./pages/Appointment";
import { APP_URL } from "./config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<Home />} />
        <Route path={APP_URL.BOOKING} element={<Booking />} />
        <Route path="/appointments" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
