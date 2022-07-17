import React from 'react';
import './styles.css'

interface ButtonProps {
    type: string; //
    value?: string;
    placeholder: string;
    onChange0: () => void;
}

export const Input = ({ type, value, placeholder, onChange0 }: ButtonProps) => {
    return (
        <input type={type} value={value} onChange={onChange0} placeholder={placeholder} />

    );
}

