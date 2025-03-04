import { Outlet } from "react-router";
import UserNavBar from "../../components/partials/UserNavBar";
import UserFooter from "../../components/partials/UserFooter";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const UserWrapper = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/check-session`, {
                    withCredentials: true
                });
                
                setLoading(false);


            } catch (error) {
                navigate('/auth/login');
            }
        };

        checkAuth();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        
        
        
        <div>
            <UserNavBar /> {/* Add UserNavBar component here */}
            <h1>This is the user profile wrapper, which contains different outlets</h1>
            <Outlet />
            <UserFooter />
        </div>
    )
}

export default UserWrapper;