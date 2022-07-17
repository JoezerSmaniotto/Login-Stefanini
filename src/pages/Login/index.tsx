import React, { ChangeEvent, useState } from 'react';
import './styles.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export const Login = () => {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const goSignUp = () => {

    }

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="content">
                <input
                    type="text"
                    value={email}
                    placeholder="Digite seu e-mail"
                    // onChange0={handleEmailInput}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Digite seu e-mail"
                    // onChange0={handlePasswordInput}
                    onChange={e => setPassword(e.target.value)}
                />

                <span className="errorLogin">Dados divergentes, Favor verificar</span>
                <Button name={'Cadastrar'} functionClick={() => { alert("OOIOI") }} />
                <p>Não tem conta ?  <button className="buttonLink" onClick={() => { alert("Cadastrar") }}>Registre-se</button></p>
            </div>
        </div>

    );
}

