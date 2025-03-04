import axios from 'axios';
import { useState } from 'react';
import { useSearchParams } from 'react-router';


const UpdateRecoveredPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const [passwordUpdateResponse, setPasswordUpdateResponse] = useState(null); // initialized state for response

    // Get a specific query parameter
    const token = searchParams.get('token');


    const updateRecoveredPassword = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                token: token,
                newPassword: e.target.newPassword.value,
                confirmNewPassword: e.target.confirmNewPassword.value,
            };

            const response = await axios.patch(`${import.meta.env.VITE_SERVER_API}/api/v1/auth/createNewPassword`, formData);

            setPasswordUpdateResponse(response.data);
        } catch (error) {
            console.error('Error updating recovered password:',
                error);
        }
    };
    
    return (
<>
        passwordUpdateResponse ? (
            <div>
                <div className={passwordUpdateResponse.success ? 'success' : 'error'}>
                    {passwordUpdateResponse.message}
                </div>
            </div>
        ) : (

        <div className="response">
            <h2>Update Recovered Password</h2>
            <form onSubmit={updateRecoveredPassword}>
                <input type="password" name="newPassword" placeholder="Enter your new password" required />
                <input type="password" name="confirmNewPassword" placeholder="Confirm your new password" required />
                <button type="submit">Update Password</button>
            </form>
        </div>
        )
</>
    );
};

export default UpdateRecoveredPasswordPage;