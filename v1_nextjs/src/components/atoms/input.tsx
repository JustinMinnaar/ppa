import React from 'react';
import TextField from '@mui/material/TextField';

interface props {
    id: string;
    label: string;
    variant: 'filled' | 'outlined' | 'standard';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className: any;
    placeholder: string
}


const BasicTextFields: React.FC<props> = ({ id, label, variant, onChange, value, className, placeholder }) => {
    return (
        <TextField placeholder={placeholder} id={id} label={label} variant={variant} sx={className} />
    );
}