import React,{ useState } from 'react';

import { InputBox, SelectBox, ModalSucess } from '../../components';

import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import api from '../../services/api';

import './register.css';

import LogoBranca from '../../assets/logo-salvus-branca.svg';
import DoctorIcon from '../../assets/icons/doctor.svg';
import NurseIcon from '../../assets/icons/nurse.svg';
import TecNurseIcon from '../../assets/icons/tec-nurse.svg';
import PhonoIcon from '../../assets/icons/phono.svg';

function Register() {
    const [modalSucessSituation, setModalSucessSituation] = useState('none');

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    const [gender, setGender] = useState('');
    const [profi, setProfi] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [specialty, setSpecialty] = useState('medico');
    const [location, setLocation] = useState('');
    const [maxDistance, setMaxDistance] = useState('');

    async function registrationHandler(e) {
        e.preventDefault();
        try {
            await api.post('/user', { 
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

            setModalSucessSituation("flex")
            
        } catch (error) {
            
            store.addNotification({
                title: "Houve um erro! :(",
                message: "Ou você já tem conta ou escreveu algo errado, tenta dá uma checada! ",
                type: "danger",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                id: "bad",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
            });
            
        }
    }

    return (
        <>
            <ReactNotification/>
            <ModalSucess style={{display: modalSucessSituation}} />

            <header className="header-register">
                <img src={LogoBranca} alt="Logo da Salvus" />
            </header>
            
            <main className="main-register">
                <h1>
                    Que incrível que <br />
                    você deseja impactar <br />
                    a saúde no Brasil.
                </h1>

                <p>
                    o primeiro passo é preencher esse <br />
                    formulário de inscrição.
                </p>

                <form action="" onSubmit={registrationHandler}>
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
                            onChange={e => setTel(e.target.value)}
                            />
                        </InputBox>

                        <InputBox
                        title="Gênero"
                        htmlFor="gender"
                        >
                            <select required name="gender" id="gender" onChange={e => setGender(e.target.value)}>
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
                            placeholder="Até quantos quilometros você pode ir além de sua cidade?"
                            onChange={e => setMaxDistance(e.target.value)}
                            />
                        </InputBox>

                    </fieldset>
                
                    <button type="submit" >Cadastrar</button>
                </form>
            </main>
        </>
  );
}

export default Register;