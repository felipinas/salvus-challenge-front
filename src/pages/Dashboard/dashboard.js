import React, { useState, useEffect, useContext } from 'react';
import { Pie } from 'react-chartjs-2';

import { DataBox, UserLine } from '../../components';

import { UserContext } from '../../context/UserContext';

import api from '../../services/api';

import './dashboard.css';

import logoSalvus from '../../assets/logo-salvus-semnome.svg';
import dashboardIcon from '../../assets/icons/dashboard.svg';

function Dashboard() {
  const [usersData, setUsersData] = useState([]);

  const [userData, setUserData] = useContext(UserContext);

  const [doctorsQuantity, setDoctorsQuantity] = useState(0);
  const [tecQuantity, setTecQuantity] = useState(0);
  const [phonoQuantity, setPhonoQuantity] = useState(0);
  const [nurseQuantity, setNurseQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dateToBrazilDate = date => {
    return `${date.slice(8,10)}/${date.slice(5,7)}/${date.slice(0,4)}`
  }

  const catchUsersData = async () => {
    
    try {
      const usersJson = await api.get('/users');
      setUsersData(usersJson.data);
    } catch (error) {
      console.log(error)
    }

  };

  const getQtdSpecialty = specialtyName => {

    return usersData.filter(user => user["specialty"] === specialtyName ).length;

  };

  const updateDataSpecialty = () => {

    const doctorSpecialty = getQtdSpecialty("medico");

    const tecSpecialty = getQtdSpecialty("tec-enfermagem");

    const phonoSpecialty = getQtdSpecialty("fono");

    const nurseSpecialty = getQtdSpecialty("enfermeiro");

    setDoctorsQuantity(doctorSpecialty);
    setTecQuantity(tecSpecialty);
    setPhonoQuantity(phonoSpecialty);
    setNurseQuantity(nurseSpecialty);

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
        
        <main className="main-dashboard">
          <div className="content">

            <div className="welcome-dashboard">
              <p>
                Olá, {userData.name}
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
              Gráfico
            </h1>

            <div className="charts">

              <Pie
              data={{
                labels: ["Médico", "Fonoaudiólogos", "Enfermeiros", "Téc. de enfermagem"],
                datasets: [{
                  label: 'Quantidade de cada área',
                  data: [doctorsQuantity, phonoQuantity, nurseQuantity, tecQuantity],
                  backgroundColor: [
                      'rgba(42, 146, 55, 0.7)',
                      'rgba(255, 99, 132, 0.7)',
                      'rgba(255, 206, 86, 0.7)',
                      'rgba(201, 203, 207, 0.7)'
                  ],
                  borderColor: [
                      'rgba(42, 146, 55, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(201, 203, 207, 1)'
                  ],
                  borderWidth: 2
                }]
              }}
              height={300}
              width={300}
              options={{
                maintainAspectRatio: false
              }}
              />

            </div>

            <h1 className="title-registers">
                Todos cadastros
            </h1>

            <div className="all-users">
              
              {
                usersData?.map( ({
                  _id,
                  name,
                  location,
                  specialty,
                  tel,
                  maxDistance,
                  email,
                  registerNumber,
                  profi,
                  birthDate}) => {

                  if (specialty !== "administrar") {
                    return (
                    <UserLine
                    key={_id}
                    name={name}
                    email={email}
                    tel={tel}
                    location={location}
                    specialty={specialty}
                    registerNumber={registerNumber}
                    profi={profi}
                    date={dateToBrazilDate(birthDate)}
                    maxDistance={maxDistance}
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