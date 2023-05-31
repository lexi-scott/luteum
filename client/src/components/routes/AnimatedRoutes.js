import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "../../pages/landing/Landing";

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route path="/" 
            element={<Landing />} 
            />
        </Routes>

    )
};

export default AnimatedRoutes;