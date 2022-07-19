import React, { ChangeEvent, useContext, useState } from 'react';
import './styles.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import { RegisteredContext } from '../../contexts/RegisteredUsers/ RegisteredUsersContext';

export const Login = () => {
    const registUsers = useContext(RegisteredContext);

    const navigate = useNavigate()
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    const goSignUp = () => {
        navigate('/signup')

    }

    const logar = async () => {
        let result = await registUsers.login(user, password)

        if (result) {
            alert("Login Feito com Sucesso")
            if (error) {
                setError(false)
            }
        } else {
            setError(true)
        }
    }

    return (
        <div className="container">
            <div className="content">
                <h1>Login</h1>
                <input
                    type="text"
                    value={user}
                    placeholder="Digite usúario"
                    onChange={e => setUser(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Digite sua senha"
                    onChange={e => setPassword(e.target.value)}
                />
                {
                    error &&
                    <span className="errorLogin">Dados divergentes, Favor verificar</span>
                }
                <Button name={'Logar'} functionClick={logar} />
                <p>Não tem conta ?  <button className="buttonLink" onClick={goSignUp}>Registre-se</button></p>
            </div>
        </div>

    );
}

