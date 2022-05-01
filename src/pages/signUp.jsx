import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import api from '../services/api';
import Logo from "../components/Logo";

import image07 from "../images/image07.svg";

import "../style/signUp.scss";

const defaultForm = {
    name: '',
    email: '',
    cpf_or_cnpj: '',
    password: '',
    confirmPassword: '',
    groupcategory: '',
    zip_code: '',
    address: '',
    house_number: '',
    complement: ''
}

function Home() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ ...defaultForm });
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        console.log(form)

        try {
            if (form.password !== form.confirmPassword) {
                setError('senhas não conferem');
                return;
            }       

            if (document.querySelector('#costureira').checked) {
                form.groupcategory = 'costureira';
            }

            if (document.querySelector('#empresaDoadora').checked) {
                form.groupcategory = 'empresaDoadora';
            }

            const response = await api.post('/register',
                {
                    name: form.name,
                    email: form.email,
                    cpf_or_cnpj: form.cpf_or_cnpj,
                    password: form.password,
                    groupcategory: form.groupcategory,
                    zip_code: form.zip_code,
                    address: form.address,
                    house_number: form.house_number,
                    complement: form.complement
                }
            );

            if (response.status > 204) {
                return;
            }

            setError('');
            setSucess('Usuário cadastrado com sucesso!');
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <main className="signUpContainer">
            <Logo />
            <img
                src={image07}
                alt="ilustração de um fotográfo tirando fot de roupas"
                section
                className="registrationImage"
            />
            <p className="registrationParagraph">Cadastre-se</p>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <section className="registrationTypeContainer">
                    <p>Selecione abaixo qual grupo você pertence</p>
                    <section className="registrationType">
                        <label for="costureira">Costureira</label>
                        <input
                            type="radio"
                            name="groupcategory"
                            id="costureira"
                            value="costureira"
                        />
                    </section>
                    <section className="registrationType">
                        <label for="empresaDoadora">
                            Empresa doadora de tecidos
                        </label>
                        <input
                            type="radio"
                            name="groupcategory"
                            id="empresaDoadora"
                            value="empresaDoadora"
                        />
                    </section>
                </section>

                <input
                    name="name"
                    type="text"
                    placeholder="Nome Completo"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <input
                    name="cpf_or_cnpj"
                    type="text"
                    placeholder="CPF ou CNPJ"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <input
                    name="zip_code"
                    type="text"
                    placeholder="CEP"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Endereço"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <section className="informationsAdressSection">
                    <input
                        name="house_number"
                        type="number"
                        placeholder="N:"
                        className="informationsAdressSectionInput"
                        onChange={handleChangeForm}
                    />
                    <input
                        name="complement"
                        type="text"
                        placeholder="Complemento"
                        className="informationsAdressSectionInput"
                        onChange={handleChangeForm}
                    />
                </section>
                <input
                    name="password"
                    type="text"
                    placeholder="Senha"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />
                <input
                    name="confirmPassword"
                    type="text"
                    placeholder="Confirme sua Senha"
                    className="informationsSection"
                    onChange={handleChangeForm}
                />

                {error && <p style={{color: 'red'}}>{error}</p>}
                {sucess && <p style={{color: 'green'}}>{sucess}</p>}

                <button className="submitButton" type="submit">Concluir!</button>
            </form>
            <button className="cancelButton" onClick={() => navigate('/')}>Cancelar</button>
        </main>
    );
}

export default Home;
