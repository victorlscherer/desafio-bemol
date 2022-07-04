import { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import jwt_decode from "jwt-decode";
import axios from "axios";

import { boxDashboard } from "./style";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem('token') || "");

    useEffect(() => {
        if (!token) {
            return navigate("/");
        }
    }, [token]);

    const [client, setClient] = useState({})

    useEffect(() => {
        if (token) {
            const { id } = jwt_decode(token);
            axios.get(`http://localhost:8080/client/${id}`)
                .then(res => {
                    setClient(res.data.client)
                }
                ).catch(err => {
                    console.log(err);
                }
                );
        }
    }
        , []);


    return (

        <Container>
            <Box sx={boxDashboard}>
                <Typography variant="h4">
                    Olá, {client.username}
                </Typography>
                <Typography variant="h6">
                    Seu email: {client.email}
                </Typography>
                <Typography variant="h6">
                    Seu telefone: {client.phone}
                </Typography>
                <Typography variant="h6">
                    Seu CEP: {client.CEP}
                </Typography>
                <Typography variant="h6">
                    Seu estado: {client.state}
                </Typography>
                <Typography variant="h6">
                    Seu cidade: {client.city}
                </Typography>
                <Typography variant="h6">
                    Seu nome da rua: {client.streetName}
                </Typography>
                <Typography variant="h6">
                    Seu número da casa: {client.houseNumber}
                </Typography>
                <Typography variant="h6">
                    Seu complemento: {client.complement}
                </Typography>
            </Box>
        </Container >
    );
}

export default DashboardPage;