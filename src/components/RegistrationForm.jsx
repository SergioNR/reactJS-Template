import apiClient from "../config/API/axiosConfig.mjs"
import { useState } from "react"
import { logError } from "../config/logging/loggerFunctions.mjs"

const RegistrationForm = () => {

const [response, setResponse] = useState({
})

const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
        const response = await apiClient.post(`/api/v1/auth/register/local`, {
            username: e.target.username.value,
            password: e.target.password.value
        })
        
        setResponse({
            success: true,
            message: response.data.message
        })
        
    } catch (err) {

        if (err.status === 409) {
            return setResponse({
                success: false,
                message: 'Username already exists'
            })
        }

        if (err.status === 422) {
            return setResponse({
                success: false,
                message: 'Please provide a valid email and password'
            })
        }

        logError('Registration failed', err, 'N/A')

        return setResponse({
            success: false,
            message: 'Internal error, please try again in a few minutes'
        })
    }
}

return (
    <>
        <div>
            {response && (
                <div className="responseContainer">
                        <p>{response.message}</p>
                    </div>
                )}
        </div>

        <div>
            
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" defaultValue="username@gmail.com" placeholder="Username" />
                <input type="password" name="password" defaultValue="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    </>
)}

export default RegistrationForm