import { createContext } from 'react';
import { User } from '../../types/User';

export type RegisteredUsersType = {
    signup: (name: string, password: string) => Promise<boolean>;
    login: (name: string, password: string) => Promise<boolean>;
    users: User[] | null;
}

export const RegisteredContext = createContext<RegisteredUsersType>(null!);