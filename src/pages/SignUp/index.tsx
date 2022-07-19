import React, { ChangeEvent, useContext, useState, useEffect } from 'react';
import lodash from 'lodash';
import './styles.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import { RegisteredContext } from '../../contexts/RegisteredUsers/ RegisteredUsersContext';
import { User } from "../../types/User";
export const SignUp = () => {
    const registUsers = useContext(RegisteredContext);
    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        password: '',
        showPassword: '',
        error: false,
    });

    const [search, setSearch] = useState('')
    const [searchPests, setSearchPests] = useState<User[]>([]);

    useEffect(() => {
        if (search !== '') {
            const result = registUsers.users.filter((user) => {
                return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
            setSearchPests(result)
        }

    }, [search])
    const cadastraUser = async () => {
        if (data.name && data.password === data.showPassword) {
            const isRegister = await registUsers.signup(data.name, data.showPassword);
            if (isRegister) {
                alert(`Usuário ${data.name} já foi cadastrado!`)
            } else {
                setData({
                    name: '',
                    password: '',
                    showPassword: '',
                    error: false,
                })
            }
            if (data.error) {
                setData({ ...data, error: false })
            }

        } else {
            setData({ ...data, error: true })
        }
    }

    return (
        <div className="container">



            <div className="content">
                <h1>SignUp</h1>
                <input
                    type="text"
                    value={data.name}
                    placeholder="Digite seu usuários"
                    // onChange0={handleEmailInput}
                    onChange={e => setData({ ...data, name: e.target.value })}
                />
                <input
                    type="password"
                    value={data.password}
                    placeholder="Digite sua senha"
                    // onChange0={handlePasswordInput}
                    onChange={e => setData({ ...data, password: e.target.value })}
                />
                <input
                    type="password"
                    value={data.showPassword}
                    placeholder="Confirme sua senha"
                    // onChange0={handlePasswordInput}
                    onChange={e => setData({ ...data, showPassword: e.target.value })}
                />
                {
                    data.error &&
                    <span className="errorLogin">Dados divergentes, Favor verificar</span>
                }
                <Button name={'Cadastrar'} functionClick={cadastraUser} />
            </div>

            <div className="content">

                <h2>Usuários Cadastrados</h2>

                {
                    (lodash.size(registUsers.users) > 0) &&
                    <>
                        <input
                            type="text"
                            value={search}
                            placeholder="Pesquise Usuário"
                            onChange={e => setSearch(e.target.value)}
                        />

                        <ul>
                            {(lodash.size(search) === 0) &&

                                registUsers.users.map((item, index) => {
                                    return (
                                        <li key={`names${index}`}>{item.name}</li>
                                    )
                                })

                            }

                            {(lodash.size(search) > 0) &&

                                searchPests.map((item, index) => {
                                    return (
                                        <li key={`names${index}`}>{item.name}</li>
                                    )
                                })

                            }

                        </ul>
                    </>
                }

            </div>
        </div>
    );
}

