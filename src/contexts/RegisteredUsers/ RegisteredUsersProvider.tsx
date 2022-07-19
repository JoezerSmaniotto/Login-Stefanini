import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { RegisteredContext } from "./ RegisteredUsersContext";
import lodash from 'lodash';

export const RegisteredUsersProvider = ({ children }: { children: JSX.Element }) => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        let getUser = localStorage.getItem("users");
        if (getUser !== null) {
            let getUser = localStorage.getItem("users");
            let local: Array<User> = [];
            local = JSON.parse(getUser)
            setUsers(local)
        }
    }, [])

    const login = async (name: string, password: string) => {
        let getUser = localStorage.getItem("users");
        let local: Array<User> = [];
        local = JSON.parse(getUser)
        if (lodash.size(local) > 0) {
            let matchUser = local.filter((person) => {
                if (person.name === name && person.password === password) {
                    return person;
                }
            })
            return (lodash.size(matchUser) > 0) ? true : false;

        } else {// has no registered user
            return false;
        }
    }

    const signup = async (name: string, password: string) => {
        const existUser = findUser(name);
        if (!existUser) {
            setUsers(preUsers => [...preUsers, { name: name, password: password }])
            let local: Array<User> = [];
            local = [...users, { name: name, password: password }]
            let localStringify = JSON.stringify(local)
            localStorage.setItem("users", localStringify);

            return false;
        } else {
            return true;
        }
    }


    const findUser = (name: string) => {
        if (lodash.size(users) > 0) {
            let matchUser = users.filter((person) => {
                if (person.name === name) {
                    return person;
                }
            })
            return (lodash.size(matchUser) > 0) ? true : false;

        } else {// has no registered user
            return false;
        }


    }


    return (
        <RegisteredContext.Provider value={{ signup, users, login }}>
            {children}
        </RegisteredContext.Provider>
    );
}