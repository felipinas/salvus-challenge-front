import React from 'react';

import './UserLine.css';

function UserLine(props) {
  return (
      <div className="user-line">
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
  );
}

export default UserLine;