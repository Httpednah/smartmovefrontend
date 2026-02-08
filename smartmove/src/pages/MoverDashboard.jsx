import React from "react";
import "./MoverDashboard.css";

export default function MoverDashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Mover Dashboard</h1>
        <p>Manage your jobs, availability, and earnings</p>
      </header>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Active Jobs</h3>
          <p className="stat">3</p>
          <span>Jobs in progress</span>
        </div>

        <div className="dashboard-card">
          <h3>Upcoming Moves</h3>
          <p className="stat">5</p>
          <span>Scheduled bookings</span>
        </div>

        <div className="dashboard-card">
          <h3>Total Earnings</h3>
          <p className="stat">KES 120,000</p>
          <span>This month</span>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Recent Jobs</h2>

        <div className="job-card">
          <div>
            <strong>Client:</strong> Jane Doe
            <br />
            <strong>Date:</strong> 22 Sept 2026
          </div>
          <span className="status in-progress">In Progress</span>
        </div>

        <div className="job-card">
          <div>
            <strong>Client:</strong> Mark Otieno
            <br />
            <strong>Date:</strong> 18 Sept 2026
          </div>
          <span className="status completed">Completed</span>
        </div>
      </section>
    </div>
  );
}
