import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Kehamilan from "./components/pages/Kehamilan";
import DetailKehamilan from "./components/pages/DetailKehamilan";
import DashboardKehamilan from "./components/pages/DashboardKehamilan";
import NotFound from "./components/pages/NotFound";
import { getUserData } from "./api/data";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserData(setUser);
  }, []);
  return (
    <>
      {user ? (
        <div className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" index element={<Home data={user} />}></Route>
            <Route path="/kehamilan/:id" exact element={<Kehamilan />}></Route>
            <Route path="/menu" exact element={<Menu />}></Route>
            <Route
              path="/kehamilan-dashboard/:id"
              exact
              element={<DashboardKehamilan />}
            ></Route>
            <Route
              path="/kehamilan/detail/:id"
              exact
              element={<DetailKehamilan />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}

export default App;
