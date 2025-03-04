import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {

    const [loginResponse, setLoginResponse] = useState(null);

    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        

        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try {

            const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/login/local`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const jsonResponse = await response.json();

            setLoginResponse(jsonResponse)

            if (jsonResponse.success === true) {

                navigate('/user');
            }

        } catch (error) {
            console.error('Login failed:', error);
            
            if (error.response.status === 401) {
                setLoginResponse('The combination of user and password is incorrect');
            }
            else {
                setLoginResponse(error.message);
            }
        }
    };

    
    return (

        <div>
            <h1>Login Page</h1>
            {loginResponse && <div className="error">
                <p>{loginResponse.message}</p>
            </div>}
            <form method="post" action="/login" onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" defaultValue="username@gmail.com" />
                <input type="password" name="password" placeholder="Password" defaultValue="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm