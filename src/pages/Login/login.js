import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { UserContext } from '../../context/UserContext';

import './login.css';

import LogoSalvus from '../../assets/logo-salvus.svg';

function Login() {
  const [userData, setUserData] = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {

      const userData = await api.post('/session', {
        email,
        password
      })
      
      setUserData(prevState => ({
        ...prevState,
        email: userData.data.email,
        name: userData.data.name,
        isLogged: true,
        isAdmin: userData.data.isAdmin,
        _id: userData.data._id
      }));

      if (userData.data.isAdmin) {
        history.push('/dashboard')
      } else {
        history.push('/atualizar')
      }

    } catch (error) {

      console.log(error)

      store.addNotification({
        title: "Houve um erro! :(",
        message: "Ou você não tem conta ou escreveu algo errado, tenta dá uma checada! ",
        type: "danger",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      
    }

  };

  return (
    <div className="container">

      <ReactNotification />

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

          <input
          type="email"
          placeholder="email"
          value={email}
          onChange={ e => setEmail(e.target.value) }
          />

          <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={ e => setPassword(e.target.value) }
          />

          <button type="submit" onClick={loginHandler}>Logar</button>

        </form>

        <p>
          Ainda não tem conta? <a href="/cadastro">Clique aqui!</a>
        </p>
      </section>

    </div>
  );
}

export default Login;