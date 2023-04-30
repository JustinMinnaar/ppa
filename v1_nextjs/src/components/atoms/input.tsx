import React from 'react';
import TextField from '@mui/material/TextField';
import { Checkbox } from '@mui/material';

interface propsTextInput {
    id: string;
    label?: string;
    variant: 'filled' | 'outlined' | 'standard';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string,
    type?:string
    style?:any;
}


const BasicTextField: React.FC<propsTextInput> = ({ type, id, label, variant, onChange, value, className, placeholder, style }) => {
    return (
        <TextField  sx={style} placeholder={placeholder} id={id} type={type} label={label} variant={variant} onChange={onChange} />
    );
}

interface propsCheckbox {
    defaultChecked: boolean;
    checked: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
    id?: string;
    label?: string;
    style:any;
    containerStyle:any
}

const Checkboxes: React.FC<propsCheckbox> = ({ containerStyle, style ,defaultChecked, checked, onChange, disabled, value, id, label }) => {
    return (
        <div style={containerStyle}>
            <Checkbox sx={style} checked={checked} onChange={onChange} defaultChecked={defaultChecked} disabled={disabled} value={value} id={id} />
            <label>{label}</label>
        </div>
    );
}

export default {
    Checkboxes,
    BasicTextField
}