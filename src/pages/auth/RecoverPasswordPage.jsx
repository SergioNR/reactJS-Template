<<<<<<< HEAD
import { logError } from "../../config/logging/loggerFunctions.mjs";
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

            logError('Failed to recover password', error);

        }
    }

=======
import ForgotPasswordForm from "../../components/login/RecoverPasswordForm";


const RecoverPasswordPage = () => {
    
>>>>>>> b107f60 (ADD mantine & various styles)
    

    return (
        <ForgotPasswordForm />
    )

};

export default RecoverPasswordPage;