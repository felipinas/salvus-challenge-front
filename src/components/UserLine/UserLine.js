import React, { useState } from 'react';

import ModalUser from '../ModalUser/ModalUser';

import './UserLine.css';

function UserLine(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
        {
        isModalVisible ?

        <ModalUser
        name={props.name}
        date={props.date}
        profi={props.profi}
        tel={props.tel}
        registerNumber={props.registerNumber}
        email={props.email}
        location={props.location}
        maxDistance={props.maxDistance}

        onClick={() => setIsModalVisible(false)}
        />

        : null
        }

        <div className="user-line" onClick={() => setIsModalVisible(true)}>
            <h1>
                {props.name}
            </h1>

            <div className="user-info">
                <div className="location">
                  <p>
                      Endereço
                  </p>
                  {props.location}
                </div>
                <div className="specialty">
                  <p>
                      Especialidade
                  </p>
                  {props.specialty}
                </div>
                <div className="contact">
                  <p>
                      Telefone
                  </p>
                  {props.tel}
                </div>
            </div>
        </div>
    </>
  );
}

export default UserLine;