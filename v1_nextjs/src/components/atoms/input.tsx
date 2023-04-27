import React from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';

interface propsTextInput {
    id?: string;
    label?: string;
    variant: 'filled' | 'outlined' | 'standard';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: any;
    placeholder?: string,
    type?:string
}


const BasicTextFields: React.FC<propsTextInput> = ({ type, id, label, variant, onChange, value, className, placeholder }) => {
    return (
        <TextField placeholder={placeholder} id={id} type={type} label={label} variant={variant} sx={className} onChange={onChange} />
    );
}

interface propsCheckbox {
    defaultChecked?: boolean;
    checked: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    id?: string;
    label?: string;
}

const Checkboxes: React.FC<propsCheckbox> = ({ defaultChecked, checked, onChange, disabled, value, id, label }) => {
    return (
        <div style={{ display: 'flex', flexDirection:'row'}}>
            <Checkbox checked={checked} onChange={onChange} defaultChecked={defaultChecked} disabled={disabled} value={value} id={id} />
            <label>{label}</label>
        </div>
    );
}