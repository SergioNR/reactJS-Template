import { useNavigate } from "react-router";


const LogOutButton = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
    try {
        
        const logoutRequest = await fetch(`/api/v1/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        })

        const logoutResponse = await logoutRequest.json()

        if (logoutResponse.success === true) {
            navigate('/')
        }

    } catch (error) {
        console.error('Logout failed', error)
    }
    
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );

};

export default LogOutButton;