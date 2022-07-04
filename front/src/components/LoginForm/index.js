import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Box, TextField, Button } from "@mui/material";

import { boxForm } from "./style";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/login/', {
            email,
            password
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        }).catch(err => {
            console.log(err);
        }
        );
    }

    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={boxForm}
                autoComplete="off"
            >
                <TextField
                    required
                    name="email"
                    label="Email"
                    variant="standard"
                    margin="normal"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    required
                    margin="normal"
                    variant="standard"
                    label="Senha"
                    name="password"
                    size="small"
                    color="primary"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                ></TextField>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Entrar
                </Button>
            </Box>
        </Container>
    );
}

export default LoginForm;