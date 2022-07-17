import React from 'react';
import './styles.css'

// import { Container } from './styles';

interface ButtonProps {
    name: string; // O mensagem de erro
    functionClick?: () => void; // Para poder estilizar o Tooltip dentro do reactjs tenho q passar o nome de uma classe
}

export const Button = ({ name, functionClick }: ButtonProps) => {
    return (
        <button type={'button'} onClick={functionClick}>
            {name}
        </button>
    );
}

