import { Outlet } from 'react-router'
import AdminNavBar from '../../components/partials/AdminNavBar.jsx'
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";
import axios from 'axios';

export const AdminDashboardWrapper = () => {
    
    
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
            <AdminNavBar />
            <h1>This is the admin dashboard and is followed by outlets</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboardWrapper;