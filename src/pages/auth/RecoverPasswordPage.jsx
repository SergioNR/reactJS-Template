import axios from "axios";
import apiClient from "../../config/API/axiosConfig.mjs";

const RecoverPasswordPage = () => {
    
    const recoverPasswordRequest = async (e) => {
        
        e.preventDefault();

        const formData = {
            email: e.target.email.value
        }

        try {
            await apiClient.post(`/api/v1/auth/recoverPassword`, formData);

        } catch (error) {

            console.error("Error recovering password:", error);
        }
    }

    
    return (

        <div>
            <h2>Recover Password</h2>
            <form onSubmit={recoverPasswordRequest}>
                <input type="email" name="email" placeholder="Enter your email" required defaultValue="username@gmail.com" />
                <button type="submit">Recover Password</button>
            </form>
        </div>
    )

};

export default RecoverPasswordPage;