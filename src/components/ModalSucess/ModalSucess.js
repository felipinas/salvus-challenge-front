import React from 'react';

import './ModalSucess.css';

import SucessIcon from '../../assets/icons/sucess.svg';

function ModalSucess() {
  return (
      <div className="modal-sucess">
          <div className="container-sucess">
              <img src={SucessIcon} alt="Ícone de sucesso" />

              <h1>
                  Cadastro realizado!
              </h1>

              <a href="/">
                  <p>
                      Ir para login
                  </p>
              </a>
          </div>
      </div>
  );
}

export default ModalSucess;