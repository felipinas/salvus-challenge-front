import {React, useState, useEffect} from 'react';

import { InputBox, SelectBox } from '../../components';

import './register.css';

import LogoBranca from '../../assets/logo-salvus-branca.svg';
import DoctorIcon from '../../assets/icons/doctor.svg';
import NurseIcon from '../../assets/icons/nurse.svg';
import TecNurseIcon from '../../assets/icons/tec-nurse.svg';
import PhonoIcon from '../../assets/icons/phono.svg';

function Register() {

    return (
        <>
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

                <form action="">
                    <fieldset>
                        <legend>Seu dados</legend>

                        <div className="divider"></div>

                        <InputBox
                        title="Nome Completo"
                        htmlFor="name"
                        >
                            <input type="text" name="name" id="name" />
                        </InputBox>

                        <InputBox
                        title="Data de nascimento"
                        htmlFor="date"
                        >
                            <input type="date" name="date" id="date" />
                        </InputBox>

                        <InputBox
                        title="Seu email"
                        htmlFor="email"
                        >
                            <input type="email" name="email" id="email" />
                        </InputBox>

                        <InputBox
                        title="Senha"
                        htmlFor="password"
                        >
                            <input type="password" name="password" id="password" />
                        </InputBox>

                        <InputBox
                        title="Telefone"
                        htmlFor="tel"
                        >
                            <input type="tel" name="tel" id="tel" />
                        </InputBox>

                        <InputBox
                        title="Gênero"
                        htmlFor="gender"
                        >
                            <select name="gender" id="gender">
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
                            <input type="text" name="pro" id="pro" />
                        </InputBox>

                        <InputBox
                        title="Número de Registro"
                        htmlFor="registerNumber"
                        >
                            <input type="text" name="registerNumber" id="registerNumber" />
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
                                <input type="radio" name="specialty" id="medico" value="medico" />
                            </SelectBox>

                            <SelectBox
                            specialty="Enfermeiro"
                            htmlFor="enfermeiro"
                            image={NurseIcon}
                            >
                                <input type="radio" name="specialty" id="enfermeiro" value="enfermeiro" />
                            </SelectBox>

                            <SelectBox
                            specialty="Fonoaudiólogo"
                            htmlFor="fono"
                            image={PhonoIcon}
                            >
                                <input type="radio" name="specialty" id="fono" value="fono" />
                            </SelectBox>

                            <SelectBox
                            specialty="Téc. Enfermagem"
                            htmlFor="tec-enfermagem"
                            image={TecNurseIcon}
                            >
                                <input type="radio" name="specialty" id="tec-enfermagem" value="tec-enfermagem" />
                            </SelectBox>
                        </div>

                        <InputBox
                        title="Localização"
                        htmlFor="localization"
                        >
                            <input type="text" name="localization" id="localization" />
                        </InputBox>

                        <InputBox
                        title="Deslocamento máximo"
                        htmlFor="route"
                        >
                            <input type="text" name="route" id="route" placeholder="Até quantos quilometros você pode ir além de sua cidade?" />
                        </InputBox>

                    </fieldset>
                
                    <button type="submit">Cadastrar</button>
                </form>
            </main>
        </>
  );
}

export default Register;