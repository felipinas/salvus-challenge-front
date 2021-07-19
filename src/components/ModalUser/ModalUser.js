import React from 'react';

import './ModalUser.css';

import closeButton from '../../assets/icons/close.svg';

function ModalUser(props) {
  return (
      <div className="modal-user-back">

        <div className="modal-user">

            <div className="closeModal">
                <img src={closeButton} alt="Fechar" onClick={props.onClick}/>
            </div>

            <div className="modal-user-line">
                  <div>
                    <h1>
                        Nome completo
                    </h1>
                    <p>
                        {props.name}
                    </p>
                  </div>

                  <div className="toRight">
                    <h1>
                        Data de nascimento
                    </h1>
                    <p>
                        {props.date}
                    </p>
                  </div>
              </div>

            <div className="modal-user-line">
                    <div>
                    <h1>
                        Profissão
                    </h1>
                    <p>
                        {props.profi}
                    </p>
                  </div>
                  
                  <div className="toRight">
                    <h1>
                        Telefone
                    </h1>
                    <p>
                        {props.tel}
                    </p>
                  </div>
              </div>

            <div className="modal-user-line">
              <div>
                    <h1>
                        Número de registro
                    </h1>
                    <p>
                        {props.registerNumber}
                    </p>
                  </div>
                  
                  <div className="toRight">
                    <h1>
                        Email
                    </h1>
                    <p>
                        {props.email}
                    </p>
                  </div>
              </div>

            <div className="modal-user-line">
              <div>
                    <h1>
                        Localização
                    </h1>
                    <p>
                        {props.location}
                    </p>
                  </div>
                  
                  <div className="toRight">
                    <h1>
                        Deslocamento máximo
                    </h1>
                    <p>
                        {props.maxDistance}
                    </p>
                  </div>
              </div>

          </div>

      </div>
  );
}

export default ModalUser;