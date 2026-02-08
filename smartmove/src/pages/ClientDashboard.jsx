import React from "react";
import "./ClientDashboard.css";

export default function ClientDashboard() {
  return (
    <div className="client-dashboard">
      <header className="client-header">
        <h1>Welcome Back 👋</h1>
        <p>Your moving journey, all in one place</p>
      </header>

      <section className="client-grid">
        <div className="client-card">
          <h3>Upcoming Move</h3>
          <p className="big">24 Sept 2026</p>
          <span>Nairobi → Mombasa</span>
        </div>

        <div className="client-card">
          <h3>Inventory Items</h3>
          <p className="big">42</p>
          <span>Items listed</span>
        </div>

        <div className="client-card">
          <h3>Move Status</h3>
          <p className="status-pill">Confirmed</p>
        </div>
      </section>

      <section className="client-section">
        <h2>Recent Activity</h2>

        <div className="activity">📦 Inventory updated</div>

        <div className="activity">🚚 Mover assigned to your booking</div>

        <div className="activity">💳 Payment pending confirmation</div>
      </section>
    </div>
  );
}
