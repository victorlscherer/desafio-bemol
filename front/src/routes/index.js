import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Registration';
import DashboardPage from '../pages/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
    );
}

export default Router;