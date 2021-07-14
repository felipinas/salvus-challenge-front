import React from 'react';

import './login.css';

import LogoSalvus from '../../assets/logo-salvus.svg';

function Login() {
  return (
    <div className="container">
      
      <section className="welcome">
        <h1>
          Gestão + Saúde = <br></br>
          Salvus.   
        </h1>
        <p>
          Vamos juntos nessa jornada?
        </p>
      </section>

      <section className="form-part">

        <img src={LogoSalvus} alt="Logo da Salvus" />

        <h1>Seu login</h1>

        <form action="">

          <input type="email" className="email" placeholder="email"/>
          <input type="password" className="senha" placeholder="senha"/>
          <button type="submit">Logar</button>

        </form>

        <p>
          Ainda não tem conta? <a href="/cadastro">Clique aqui!</a>
        </p>
      </section>

    </div>
  );
}

export default Login;