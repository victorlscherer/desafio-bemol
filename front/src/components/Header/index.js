import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { toolbar, buttonConfirm, buttonCancel } from './style';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const path = window.location.pathname;

    const navigate = useNavigate();

    const logoutFunction = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={toolbar}>
                    <Typography variant="h6">
                        Sunshine App
                    </Typography>

                    {path === '/dashboard' ? (
                        <Box>
                            <Button sx={buttonCancel} onClick={() => logoutFunction()} >Logout</Button>
                        </Box>
                    ) : (
                        <Box>
                            <Button sx={buttonConfirm} onClick={() => navigate('/login')} >Login</Button>
                            <Button sx={buttonConfirm} onClick={() => navigate('/register')} >Registro</Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;