import React, { useContext } from 'react';

import DataBox from '../../components/DataBox';

import './dashboard.css';

import logoSalvus from '../../assets/logo-salvus-semnome.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';

function Dashboard() {
  return (
      <div className="container-dashboard">

        <nav>
          <img src={logoSalvus} alt="Logo da Salvus" className="logo-salvus-dashboard" />

          <div className="section-box">
            <img src={dashboardIcon} alt="Dashboard" />
          </div>
        </nav>
        
        <main className="main-dashboard">
          <div className="content">

            <div className="welcome-dashboard">
              <p>
                Olá, João Felipe
              </p>
            </div>

            <div className="data-quantity">
              <DataBox
              title="Teste"
              quantity="500"
              style={{color: "#FFFFFF", backgroundColor: "var(--background-verde)"}}
              />

              <DataBox
              title="Teste"
              quantity="500"
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Teste"
              quantity="500"
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Teste"
              quantity="500"
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Teste"
              quantity="500"
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />
            </div>

            <h1 className="title-charts">
                Gráficos
            </h1>

            <div className="charts">
              teste
            </div>

          </div>
        </main>

      </div>
  );
}

export default Dashboard;