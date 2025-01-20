import axios from 'axios'
import { useState } from 'react'
import NavBar from '../components/partials/navBar'
const UpdatePassword = () => {

    const [response, setResponse] = useState({
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const passwordUpdateData = {
            userId: `678e5e357b5b63f89e42e53a`,
            currentPassword: e.target.currentPassword.value,
            newPassword: e.target.newPassword.value,
        };

        const response = await axios.patch('http://localhost:3000/api/v1/user/updateUserPassword', passwordUpdateData)

        if (response.data.success === false) {
            setResponse({
                success: false,
                message: response.data.message
            })
        }

        if (response.data.success === true) {
            setResponse({
                success: true,
                message: response.data.message
            })
        }
        return response
    }

    return (
        <>
            <NavBar />
            <div>

                {response && (
                    <div className="responseContainer">
                    <p>{response.message}</p>
                </div>
            )}

            <h1>Update Password</h1>
            <form onSubmit={handleSubmit}>
                <input type="password" name="currentPassword" placeholder="Current Password" defaultValue='123456' /> 
                <input type="password" name="newPassword" placeholder="New Password" defaultValue='' />
                    <button type="submit">Update Password</button>
                </form>
            </div>
        </>
    )
}

export default UpdatePassword