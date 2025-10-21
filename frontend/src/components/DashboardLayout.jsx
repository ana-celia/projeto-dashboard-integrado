import React from 'react';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">Plataforma Integrada de Dados</h1>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/superset/" className="nav-link" target="_blank" rel="noopener noreferrer">
              Superset
            </a>
            <a href="/metabase/" className="nav-link" target="_blank" rel="noopener noreferrer">
              Metabase
            </a>
            <a href="/admin/" className="nav-link" target="_blank" rel="noopener noreferrer">
              Admin
            </a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Plataforma de Dashboards Integrados. Desenvolvido por Ana Célia Baía Araújo.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;