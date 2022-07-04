import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Container, Button, Box } from '@mui/material';
import { boxForm, Input } from './style'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const navigate = useNavigate();

    const schema = yup.object({
        username: yup.string().required('Username é obrigatório'),
        fullname: yup.string().required('Fullname é obrigatório'),
        email: yup.string().required('Email é obrigatório'),
        password: yup.string().required('Password é obrigatório'),
        phone: yup.string().required('Phone é obrigatório'),
        CEP: yup.string().required('CEP é obrigatório').max(9, 'CEP deve ter no máximo 9 caracteres'),
        state: yup.string().required('State é obrigatório'),
        city: yup.string().test("customRequiredCheck", "Campo obrigatório", () => !!city),
        streetName: yup.string().test("customRequiredCheck", "Campo obrigatório", () => !!streetName),
        houseNumber: yup.string().required('House number é obrigatório'),
        complement: yup.string().required('Complement é obrigatório')
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [streetName, setStreetName] = useState('')

    const checkCep = async (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setState(data.uf)
                setCity(data.localidade)
                setStreetName(data.logradouro)
            }
            ).catch(err => {
                return err;
            }
            );
    }

    const onSubmit = (data) => {
        axios.post('http://localhost:8080/registration/', data)
            .then(res => {
                navigate('/login')
            }
            ).catch(err => {
                // colocar toast
            }
            );
    }

    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={boxForm}
                autoComplete="off"
            >
                <TextField
                    name="username"
                    label="Username"
                    variant="standard"
                    margin="normal"
                    fullWidth
                    {...register('username')}
                    error={errors.username ? true : false}
                    helperText={errors.username ? errors.username.message : ''}
                />
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Nome completo"
                    name="fullname"
                    size="small"
                    color="primary"
                    {...register("fullname")}
                    error={errors.fullname ? true : false}
                    helperText={errors.fullname ? errors.fullname.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Email"
                    name="email"
                    size="small"
                    color="primary"
                    {...register("email")}
                    error={errors?.email ? true : false}
                    helperText={errors?.email ? errors.email.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Senha"
                    name="password"
                    type="password"
                    size="small"
                    color="primary"
                    {...register("password")}
                    error={errors?.password ? true : false}
                    helperText={errors?.password ? errors.password.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Telefone"
                    name="phone"
                    size="small"
                    color="primary"
                    {...register("phone")}
                    error={errors?.phone ? true : false}
                    helperText={errors?.phone ? errors.phone.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="CEP"
                    name="CEP"
                    size="small"
                    color="primary"
                    {...register("CEP")}
                    onBlur={checkCep}
                    error={errors?.CEP ? true : false}
                    helperText={errors?.CEP ? errors.CEP.message : ''}
                ></TextField>
                <TextField
                    value={state}
                    margin="normal"
                    variant="standard"
                    label="Estado"
                    name="state"
                    size="small"
                    color="primary"
                    {...register("state")}
                    error={errors?.state ? true : false}
                    helperText={errors?.state ? errors.state.message : ''}
                ></TextField>
                <TextField
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    margin="normal"
                    variant="standard"
                    label="Cidade"
                    name="city"
                    size="small"
                    color="primary"
                    {...register("city")}
                    error={errors?.city ? true : false}
                    helperText={errors?.city ? errors.city.message : ''}
                ></TextField>
                <TextField
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    margin="normal"
                    variant="standard"
                    label="Rua"
                    name="streetName"
                    size="small"
                    color="primary"
                    {...register("streetName")}
                    error={errors?.streetName ? true : false}
                    helperText={errors?.streetName ? errors.streetName.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Número"
                    name="houseNumber"
                    size="small"
                    color="primary"
                    {...register("houseNumber")}
                    error={errors?.houseNumber ? true : false}
                    helperText={errors?.houseNumber ? errors.houseNumber.message : ''}
                ></TextField>
                <TextField
                    margin="normal"
                    variant="standard"
                    label="Complemento"
                    name="complement"
                    size="small"
                    color="primary"
                    {...register("complement")}
                    error={errors?.complement ? true : false}
                    helperText={errors?.complement ? errors.complement.message : ''}
                ></TextField>
                <Button type="submit" variant="contained" color="primary" size="large">
                    Enviar
                </Button>
            </Box >
        </Container >
    );

}

export default RegisterForm;