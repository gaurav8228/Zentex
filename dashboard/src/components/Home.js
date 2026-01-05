import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ProtectedRoute from "./routes/ProtectedRoute";
const Home = () => {
  return (
    <>
      <TopBar />
       <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
     
    </>
  );
};

export default Home;
