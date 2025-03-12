import { useState } from "react";
import { useNavigate } from "react-router";
import apiClient from "../config/API/axiosConfig.mjs";
import { logError } from "../config/logging/loggerFunctions.mjs";

const LoginForm = () => {

    const [loginResponse, setLoginResponse] = useState(null);
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try {
            const loginResponse = await apiClient.post(`/api/v1/auth/login/local`, data);
            
            switch (loginResponse.data.user.role) {
                case "admin":
                    return navigate('/admin');
                case "user":
                    return navigate('/user');
                default:
                    return navigate('/');
            }

        } catch (error) {
            if (error && error.loginResponse.status === 401) {
                return setLoginResponse(
                    { 
                        success: false,
                        message: 'Invalid username or password' 
                    }
                );
            }
            else {
                logError('Error in login functionality', error, 'N/A');
                return setLoginResponse({
                    success: false,
                    message: error.message
            });
            }
        }
    };

    
    return (

        <div>
            <h1>Login Page</h1>
            {loginResponse && 
                <div>
                    <p>{loginResponse.message}</p>
                </div>
                }
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" defaultValue="username@gmail.com" />
                <input type="password" name="password" placeholder="Password" defaultValue="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm