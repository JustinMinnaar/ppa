import * as React from 'react';
import Button from '@mui/material/Button';

type buttonProps = {
    children:React.ReactNode;
    variant: 'outlined' | 'text' | 'contained';
    style:any;
}
export const BasicButtons:React.FC<buttonProps> = ({children,variant, style})=>{
    return (
            <Button sx={style} variant={variant}>{children}</Button>
    );
}