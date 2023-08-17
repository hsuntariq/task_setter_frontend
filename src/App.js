import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddGoal from "./pages/AddGoal";
import ShowGoals from "./pages/ShowGoals";
import ShowAdmin from "./pages/ShowAdmin";
import ShowUsers from "./pages/ShowUsers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-goal" element={<AddGoal/>}/>
          <Route path="/show-goal" element={<ShowGoals/>}/>
          <Route path="/show-admin" element={<ShowAdmin/>}/>
          <Route path="/show-user" element={<ShowUsers/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
