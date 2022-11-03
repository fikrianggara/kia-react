import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { getUserData } from "@/api/data";
import Loader from "@/components/Loader";
import { MenuIbuAnak } from "@/pages/ibu-anak";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Detail } from "./pages/ibu-anak/kehamilan/Detail";
import { KehamilanDashboard } from "./pages/ibu-anak/kehamilan";
import { Statistik } from "./pages/ibu-anak/kehamilan/Statistik";
import { PersalinanDashboard } from "./pages/ibu-anak/persalinan/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData(setUser);
  }, []);

  if (!user) return <Loader />;

  return (
    <div className="bg-gray-100 min-h-screen sm:w-[480px] m-auto md:shadow scroll-smooth">
      <Routes>
        <Route path="/" index element={<Home data={user} />} />

        <Route path="/ibu-anak" exact element={<MenuIbuAnak data={user} />} />

        <Route
          path="/ibu-anak/kehamilan/:id"
          exact
          element={<KehamilanDashboard data={user} />}
        />
        <Route
          path="/ibu-anak/kehamilan/detail/:id"
          exact
          element={<Detail data={user} />}
        />
        <Route
          path="/ibu-anak/kehamilan/statistik/:id"
          exact
          element={<Statistik data={user} />}
        />

        <Route
          path="/ibu-anak/persalinan/:id"
          exact
          element={<PersalinanDashboard data={user} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
