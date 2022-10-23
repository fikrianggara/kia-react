import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { getUserData } from "./api/data";
import { MenuIbuAnak } from "./pages/ibu-anak";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { KehamilanDashboard } from "./pages/ibu-anak/kehamilan";

import "./App.css";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => { getUserData(setUser); }, []);

  if (!user) return (<span>Loading...</span>)

  return (
    <div className="bg-gray-100 min-h-screen md:w-[400px] m-auto md:shadow">
      <Routes>
        <Route path="/" index element={<Home data={user} />} />

        <Route
          path="/ibu-anak"
          exact
          element={<MenuIbuAnak data={user} />}
        />
        
        <Route
          path="/ibu-anak/kehamilan/:id"
          exact
          element={<KehamilanDashboard data={user} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
