import React, { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import MyMoves from "./pages/MyMoves";
import Inventory from "./pages/Inventory";
import Movers from "./pages/Movers";
import Booking from "./pages/Booking";
import MapView from "./pages/MapView";

import Admin from "./pages/Admin";
import MoverDashboard from "./pages/MoverDashboard";
import ClientDashboard from "./pages/ClientDashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);
  const [selectedMover, setSelectedMover] = useState(null);

  /* ----------------------------------
     Navigation helper
  ---------------------------------- */
  const navigate = (nextPage) => {
    setPage(nextPage);
  };

  /* ----------------------------------
     Login success handler
  ---------------------------------- */
  const handleLoginSuccess = (user) => {
    setRole(user.role);

    if (user.role === "admin") navigate("admin");
    else if (user.role === "mover") navigate("mover-dashboard");
    else navigate("client-dashboard");
  };

  /* ----------------------------------
     Page renderer
  ---------------------------------- */
  const renderPage = () => {
    switch (page) {
      /* Public */
      case "home":
        return <Home onNavigate={navigate} />;
      case "services":
        return <Services onNavigate={navigate} />;
      case "about":
        return <About onNavigate={navigate} />;

      /* Auth */
      case "login":
        return <Login onSuccess={handleLoginSuccess} onNavigate={navigate} />;
      case "signup":
        return (
          <Signup onSuccess={() => navigate("login")} onNavigate={navigate} />
        );

      /* Client */
      case "client-dashboard":
        return <ClientDashboard />;
      case "mymoves":
        return <MyMoves />;
      case "inventory":
        return <Inventory />;
      case "movers":
        return (
          <Movers
            onBook={(mover) => {
              setSelectedMover(mover);
              navigate("booking");
            }}
          />
        );
      case "booking":
        return (
          <Booking
            selectedMover={selectedMover}
            onConfirm={(details) => {
              setSelectedMover(null);
              navigate("mymoves");
            }}
          />
        );

      /* Map */
      case "map":
        return <MapView />;

      /* Role dashboards */
      case "admin":
        return role === "admin" ? <Admin /> : <Home onNavigate={navigate} />;
      case "mover-dashboard":
        return role === "mover" ? (
          <MoverDashboard />
        ) : (
          <Home onNavigate={navigate} />
        );

      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <AuthProvider>
      <div className="app">
        <Header onNavigate={navigate} active={page} role={role} />

        <main className="container">{renderPage()}</main>

        {/* 🔔 Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </div>
    </AuthProvider>
  );
}
