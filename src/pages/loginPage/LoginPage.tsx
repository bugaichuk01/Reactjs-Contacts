import React, {useState} from 'react';
import {useActions} from "../../_hooks/useActions";
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {Alert, Button, Container, TextField} from "@mui/material";

function LoginPage() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {login} = useActions()
    const {error} = useTypedSelector(state => state.auth)

    function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function passwordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <Container maxWidth={'sm'}>
            <form className={'container w-25 mt-5'} onSubmit={onSubmit}>
                <h1>Login</h1>
                <TextField style={{marginTop: '10px'}} fullWidth label="Email" variant="outlined" value={email}
                           onChange={emailChange}/>
                <TextField style={{marginTop: '10px'}} fullWidth label="Password" variant="outlined" value={password}
                           onChange={passwordChange}/>
                <Button style={{marginTop: '10px'}} fullWidth variant={'contained'} type={'submit'}>Login</Button>
                {error && (
                    <Alert severity="error">Error, try again</Alert>
                )}
            </form>
        </Container>
    );
}

export default LoginPage;