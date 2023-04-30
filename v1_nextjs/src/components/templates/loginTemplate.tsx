import React from  'react'
import InputAtoms from '../atoms/input'
import {BasicButtons} from "../atoms/button";
import styling from '../../styles/loginForm.module.css'

type LoginFormProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(event);
    };

    const handleChecked =()=>{
        setChecked(!checked)
    }
    const styles = {
        formTextInputs:{
            margin: '7.5px auto',
            width:'300px',
            boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
            borderRadius: '14px',
            fontFamily: 'Ubuntu, sans-serif',
        },
        formButton:{
            margin: '7.5px auto',
            width:'300px',
            height:'60px',
            background: 'linear-gradient(90deg, rgba(8,119,143,1) 42%, rgba(0,212,255,1) 100%)',
            transition:'none',
            borderRadius:'8px',
            fontFamily: 'Ubuntu, sans-serif',
            '&:hover':{
                background: 'rgba(8,119,143,1)',
                transform:'scale(1.1)'
            },
            '&:active':{
                transform:'scale(0.9)'
            }
        },
        checkbox:{
            margin:'auto',
            width:'300px',
            fontFamily: 'Ubuntu, sans-serif',
        }
    }

    return (
        <form className={styling.formContainer} onSubmit={handleSubmit}>
            <h2 className={styling.formTitle} >Sign In</h2>
            <InputAtoms.BasicTextField style={styles.formTextInputs} type="text" id="username" label="Username" variant="outlined" value={username} onChange={handleUsernameChange} />
            <InputAtoms.BasicTextField style={styles.formTextInputs} type="password" id="password" label="Password" variant="outlined" value={password} onChange={handlePasswordChange} />
            <InputAtoms.Checkboxes containerStyle={styles.checkbox} checked={checked} onChange={handleChecked} label="Remember me" />
            <BasicButtons style={styles.formButton} type={'submit'} variant="contained">Sign In</BasicButtons>
        </form>
    );
}

export default LoginForm;