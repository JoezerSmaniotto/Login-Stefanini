import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { RegisteredContext } from "./ RegisteredUsersContext";
import lodash from 'lodash';

export const RegisteredUsersProvider = ({ children }: { children: JSX.Element }) => {

    const [users, setUsers] = useState<User[]>([]);

    const login = async (name: string, password: string) => {
        if (lodash.size(users) > 0) {
            let matchUser = users.filter((person) => {
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