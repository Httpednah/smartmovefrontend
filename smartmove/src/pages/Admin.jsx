import React, { useState } from "react";
import "./AdminDashboard.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("Overview");

  const stats = [
    { label: "Total Revenue", value: "$124,592", trend: "+12.5%", isUp: true },
    { label: "Active Moves", value: "48", trend: "+8.2%", isUp: true },
    { label: "Total Customers", value: "1,429", trend: "+18.7%", isUp: true },
    { label: "Pending Quotes", value: "23", trend: "-4.3%", isUp: false },
  ];

  const recentMoves = [
    {
      id: "MV-2024-001",
      client: "Wanjiku Ndungu",
      route: "Karen, Nairobi → Riat Hills, Kisumu",
      price: "KES 125,000",
      date: "2026-02-05",
      status: "scheduled",
    },
    {
      id: "MV-2024-002",
      client: "James Omondi",
      route: "Milimani, Kisumu → Westlands, Nairobi",
      price: "KES 210,000",
      date: "2026-02-03",
      status: "in-progress",
    },
    {
      id: "MV-2024-003",
      client: "Grace Wambui",
      route: "Section 58, Nakuru → Milimani, Nakuru",
      price: "KES 38,500",
      date: "2026-02-02",
      status: "completed",
    },
    {
      id: "MV-2024-004",
      client: "Peter Kamau",
      route: "Kilimani, Nairobi → Bahati, Nakuru",
      price: "KES 95,000",
      date: "2026-02-08",
      status: "scheduled",
    },
    {
      id: "MV-2024-005",
      client: "Mary Akinyi",
      route: "Loresho, Nairobi → Mamboleo, Kisumu",
      price: "KES 165,000",
      date: "2026-02-01",
      status: "completed",
    },
  ];

  return (
    <div className="admin-dashboard animate-fadeIn">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-title">
          <h1>Admin Dashboard</h1>
          <p>Manage your moving business operations efficiently</p>
        </div>
        <div className="admin-actions">
          <button className="btn-social">🌐 View Website</button>
          <button className="btn-signin">📅 Schedule Move</button>
        </div>
      </header>

      {/* Stats */}
      <section className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card hover-card">
            <div className="stat-header">
              <span>{stat.label}</span>
              <div className="stat-icon">📊</div>
            </div>
            <span className="stat-value">{stat.value}</span>
            <div
              className={`stat-trend ${stat.isUp ? "trend-up" : "trend-down"}`}
            >
              {stat.isUp ? "↑" : "↓"} {stat.trend} vs last month
            </div>
          </div>
        ))}
      </section>

      {/* Tabs */}
      <nav className="admin-tabs">
        {["Overview", "Moves", "Quotes", "Customers", "Analytics"].map(
          (tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ),
        )}
      </nav>

      {/* Content */}
      {activeTab === "Moves" && (
        <section className="moves-section scrollable">
          <h2>Recent Moves</h2>
          <p className="text-muted">Latest booking activities</p>
          <div className="moves-list">
            {recentMoves.map((move, i) => (
              <div key={i} className="move-item hover-card">
                <div className="move-info">
                  <h4>
                    {move.id}{" "}
                    <span className={`status-tag status-${move.status}`}>
                      {move.status.replace("-", " ")}
                    </span>
                  </h4>
                  <p className="move-client">{move.client}</p>
                  <p className="move-route">{move.route}</p>
                </div>
                <div className="move-finance">
                  <span className="move-price">{move.price}</span>
                  <span className="move-date">{move.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
