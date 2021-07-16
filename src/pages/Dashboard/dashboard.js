import React, { useState, useEffect } from 'react';

import { DataBox, UserLine } from '../../components';

import api from '../../services/api';

import './dashboard.css';

import logoSalvus from '../../assets/logo-salvus-semnome.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';

function Dashboard() {
  const [usersData, setUsersData] = useState([]);

  const [doctorsQuantity, setDoctorsQuantity] = useState(0);
  const [tecQuantity, setTecQuantity] = useState(0);
  const [phonoQuantity, setPhonoQuantity] = useState(0);
  const [nurseQuantity, setNurseQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const catchUsersData = async () => {
    
    try {
      const usersJson = await api.get('/users');
      setUsersData(usersJson.data);
    } catch (error) {
      console.log(error)
    }

  };

  const updateDataSpecialty = () => {

    const doctorSpecialty = usersData.filter(user => {
      return user["specialty"] === "medico"
    })
      
    const tecSpecialty = usersData.filter(user => {
      return user["specialty"] === "tec-enfermagem"
    })

    const phonoSpecialty = usersData.filter(user => {
      return user["specialty"] === "fono"
    })

    const nurseSpecialty = usersData.filter(user => {
      return user["specialty"] === "enfermeiro"
    })

    setDoctorsQuantity(doctorSpecialty.length)
    setTecQuantity(tecSpecialty.length)
    setPhonoQuantity(phonoSpecialty.length)
    setNurseQuantity(nurseSpecialty.length)

  };

  useEffect(() => {
    catchUsersData()
  }, []);

  useEffect(() => {
    updateDataSpecialty()
  }, [usersData]);

  useEffect( () => {
    setTotalQuantity(doctorsQuantity + tecQuantity + phonoQuantity + nurseQuantity)
  }, [doctorsQuantity, tecQuantity, phonoQuantity, nurseQuantity]);

  
  return (
      <div className="container-dashboard">

        <nav>
          <img src={logoSalvus} alt="Logo da Salvus" className="logo-salvus-dashboard" />

          <div className="section-box">
            <img src={dashboardIcon} alt="Dashboard" />
          </div>
        </nav>

        {}
        
        <main className="main-dashboard">
          <div className="content">

            <div className="welcome-dashboard">
              <p>
                Olá, João Felipe
              </p>
            </div>

            <div className="data-quantity"> 
    
              <DataBox
              title="Total"
              quantity={totalQuantity}
              style={{color: "#FFFFFF", backgroundColor: "var(--background-verde)"}}
              />

              <DataBox
              title="Médicos"
              quantity={doctorsQuantity}
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Fonoaudiólogos"
              quantity={phonoQuantity}
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Enfermeiros"
              quantity={nurseQuantity}
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />

              <DataBox
              title="Téc. de enfermagem"
              quantity={tecQuantity}
              style={{color: "var(--cor-titulo-verde)", backgroundColor: "#FFFFFF"}}
              />
            </div>

            <h1 className="title-charts">
                Gráficos
            </h1>

            <div className="charts">
              Gráficos aqui
            </div>

            <h1 className="title-registers">
                Todos cadastros
            </h1>

            <div className="all-users">
              
              {
                usersData?.map( ({_id, name, location, specialty, tel}) => {

                  if (specialty !== "administrar") {
                    return (
                    <UserLine
                    key={_id}
                    name={name}
                    tel={tel}
                    location={location}
                    specialty={specialty}
                    />
                  );}
                })
              }

            </div>

          </div>
        </main>

      </div>
  );
}

export default Dashboard;