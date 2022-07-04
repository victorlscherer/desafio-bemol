import { Box, Typography } from '@mui/material';
import { box } from './style';
import sunshine from '../../assets/img/sunshine.png';

const Home = () => {
    return (
        <Box sx={box}>
            <img src={sunshine} alt="sunshine" />
            <Typography variant="h3" color={"white"}>
                Bem vindo ao Sunshine App!
            </Typography>
        </Box>
    );
}
export default Home;