import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Seção Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>🚀 Plataforma de Dashboards Integrados</h1>
          <p className="hero-subtitle">
            Uma solução integrada para visualização e análise de dados com 
            Apache Superset e Metabase.
          </p>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about-section">
        <div className="about-content">
          <h2>📋 Sobre o Projeto</h2>
          <div className="about-text">
            <p>
              Esta plataforma foi desenvolvida para complementar a visualização das análises desenvolvidas para o TCC de Ana Célia - TADS/IFRN, 
              de forma a demonstrar a integração de ferramentas de Business Intelligence em uma única plataforma.
            </p>
            
            <h3>🎯 Objetivos:</h3>
            <ul>
              <li>Integrar Django como backend robusto</li>
              <li>Fornecer interface moderna com React</li>
              <li>Oferecer dashboards avançados com Apache Superset</li>
              <li>Disponibilizar análises simplificadas com Metabase</li>
              <li>Garantir escalabilidade com Docker</li>
            </ul>

            <h3>👨‍💻 Desenvolvido por:</h3>
            <p><strong>Ana Célia Baía Araújo</strong></p>
            <p>Desenvolvedora Full Stack e analista de dados.</p>
          </div>
        </div>
      </section>

      {/* Seção Dashboards */}
      <section className="dashboards-section">
        <h2>Acessar Dashboards</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="card-icon">📈</div>
            <h3>Apache Superset</h3>
            <p>Dashboards avançados com visualizações robustas e que demandam mais dedicação para aprendizado 
                inicial, mas que oferta muitos recursos para análises mais complexas</p>
            <a href="/superset/" className="dashboard-button" target="_blank" rel="noopener noreferrer">
              Acessar Superset
            </a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🔍</div>
            <h3>Metabase</h3>
            <p>Análise de dados simplificada para toda a equipe com interface intuitiva.</p>
            <a href="/metabase/" className="dashboard-button" target="_blank" rel="noopener noreferrer">
              Acessar Metabase
            </a>
          </div>
        </div>
      </section>

      {/* Seção Tecnologias */}
      <section className="tech-section">
        <h2>🛠️ Tecnologias Utilizadas</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">🐍</span>
            <span>Django 5.2.7</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span>React com Vite</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📊</span>
            <span>Apache Superset</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔍</span>
            <span>Metabase</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐳</span>
            <span>Docker</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;