import React, { useState, useEffect, useContext } from 'react';

import './update.css';

import { InputBox, SelectBox, ModalSucess } from '../../components';

import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { UserContext } from '../../context/UserContext';

import api from '../../services/api';

import LogoBranca from '../../assets/logo-salvus-branca.svg';
import DoctorIcon from '../../assets/icons/doctor.svg';
import NurseIcon from '../../assets/icons/nurse.svg';
import TecNurseIcon from '../../assets/icons/tec-nurse.svg';
import PhonoIcon from '../../assets/icons/phono.svg';

function Update() {
    const [userData, setUserData] = useContext(UserContext);

    const [userDataUpdate, setUserDataUpdate] = useState({});

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    const [gender, setGender] = useState('');
    const [profi, setProfi] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');
    const [maxDistance, setMaxDistance] = useState('');

    const [modalDeleteSituation, setModalDeleteSituation] = useState(false);
    const [modalUpdateSituation, setModalUpdateSituation] = useState(false);

    const catchUserData = async () => {
    
        try {
            const user = await api.get(`/user/${userData._id}`);
            setUserDataUpdate(user.data);
        } catch (error) {
            console.log(error)
        }
    
    };

    const updateHandler = async e => {
        e.preventDefault();

        try {
            await api.post(`/update/${userData._id}`, {
                name,
                birthDate,
                email,
                password,
                tel,
                gender,
                profi,
                registerNumber,
                specialty,
                location,
                maxDistance
            });
            
            setModalUpdateSituation(true);
            
        } catch (error) {
            store.addNotification({
                title: "Houve algum erro!",
                message: "Checa se você escreveu tudo certo ou não esqueceu de nada :D",
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
    }

    const deleteHandler = async e => {
        e.preventDefault();

        try {
            await api.delete(`/user/${userData._id}`,  {
                headers: {
                    auth: userData._id
                }
            }).then(setModalDeleteSituation(true))

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => catchUserData(), []);

    useEffect(() => {

        setName(userDataUpdate.name);
        setBirthDate(userDataUpdate.birthDate);
        setEmail(userDataUpdate.email);
        setTel(userDataUpdate.tel);
        setGender(userDataUpdate.gender);
        setProfi(userDataUpdate.profi);
        setRegisterNumber(userDataUpdate.registerNumber);
        setSpecialty(userDataUpdate.specialty);
        setLocation(userDataUpdate.location);
        setMaxDistance(userDataUpdate.maxDistance);
        
    }, [userDataUpdate])

    return (
        <>
            <ReactNotification/>

            {modalDeleteSituation ? <ModalSucess title="Cadastro removido!"/> : null}

            {modalUpdateSituation ? <ModalSucess title="Alterações feitas!"/> : null}

            <header className="header-register">
                <img src={LogoBranca} alt="Logo da Salvus" />
            </header>
            
            <main className="main-register">
                <h1>
                    Aqui você pode modificar <br />
                    seus dados ou deletar o cadastro. <br />
                </h1>

                <p>
                    apenas mude abaixo :)
                </p>

                <form action="" onSubmit={updateHandler}>
                    <fieldset>
                        <legend>Seu dados</legend>

                        <div className="divider"></div>

                        <InputBox
                        title="Nome Completo"
                        htmlFor="name"
                        >
                            <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Data de nascimento"
                        htmlFor="date"
                        >
                            <input
                            type="date"
                            name="date"
                            id="date"
                            required
                            value={birthDate}
                            onChange={e => setBirthDate(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Seu email"
                        htmlFor="email"
                        >
                            <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Senha"
                        htmlFor="password"
                        >
                            <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Telefone"
                        htmlFor="tel"
                        >
                            <input
                            type="tel"
                            name="tel" 
                            d="tel"
                            required
                            value={tel}
                            onChange={e => setTel(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Gênero"
                        htmlFor="gender"
                        >
                            <select required value={gender} name="gender" id="gender" onChange={e => setGender(e.target.value)}>
                                <option value=""></option>
                                <option value="o">Outro</option>
                                <option value="f">Feminino</option>
                                <option value="m">Masculino</option>
                            </select>
                        </InputBox>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Dados profissionais
                        </legend>

                        <div className="divider"></div>

                        <InputBox
                        title="Profissão"
                        htmlFor="pro"
                        >
                            <input
                            type="text"
                            name="pro"
                            id="pro"
                            required
                            value={profi}
                            onChange={e => setProfi(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Número de Registro"
                        htmlFor="registerNumber"
                        >
                            <input
                            type="text"
                            name="registerNumber"
                            id="registerNumber"
                            value={registerNumber}
                            onChange={e => setRegisterNumber(e.target.value)}
                            />
                        </InputBox>

                    </fieldset>

                    <fieldset>
                        <legend>
                            Área de atuação
                        </legend>

                        <div className="divider"></div>
                        
                        <div className="selects">
                            <SelectBox
                            specialty="Médico"
                            htmlFor="medico"
                            image={DoctorIcon}
                            >
                                <input
                                type="radio"
                                name="specialty"
                                id="medico"
                                value="medico"
                                checked={specialty === "medico"}
                                onChange={() => setSpecialty("medico")}
                                />
                            </SelectBox>

                            <SelectBox
                            specialty="Enfermeiro"
                            htmlFor="enfermeiro"
                            image={NurseIcon}
                            >
                                <input
                                type="radio"
                                name="specialty"
                                id="enfermeiro"
                                value="enfermeiro"
                                checked={specialty === "enfermeiro"}
                                onChange={() => setSpecialty("enfermeiro")}
                                />
                            </SelectBox>

                            <SelectBox
                            specialty="Fonoaudiólogo"
                            htmlFor="fono"
                            image={PhonoIcon}
                            >
                                <input
                                type="radio"
                                name="specialty"
                                id="fono"
                                value="fono"
                                checked={specialty === "fono"}
                                onChange={() => setSpecialty("fono")}
                                />
                            </SelectBox>

                            <SelectBox
                            specialty="Téc. Enfermagem"
                            htmlFor="tec-enfermagem"
                            image={TecNurseIcon}
                            >
                                <input
                                type="radio"
                                name="specialty"
                                id="tec-enfermagem"
                                value="tec-enfermagem"
                                checked={specialty === "tec-enfermagem"}
                                onChange={() => setSpecialty("tec-enfermagem")}
                                />
                            </SelectBox>
                        </div>

                        <InputBox
                        title="Localização"
                        htmlFor="localization"
                        >
                            <input
                            type="text"
                            name="localization"
                            id="localization"
                            required
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Deslocamento máximo"
                        htmlFor="route"
                        >
                            <input
                            type="text"
                            name="route"
                            id="route"
                            required
                            value={maxDistance}
                            placeholder="Até quantos quilometros você pode ir além de sua cidade?"
                            onChange={e => setMaxDistance(e.target.value)}
                            />
                        </InputBox>

                    </fieldset>

                    <div className="buttons-update">
                        <button
                        className="delete-button"
                        onClick={deleteHandler}
                        >
                            Excluir cadastro
                        </button>

                        <button type="submit" onClick={updateHandler}>Atualizar</button>
                    </div>
                    
                </form>
            </main>
        </>
    );
}

export default Update;