import apiClient from "../../config/API/axiosConfig.mjs";
import { useState, useEffect } from "react"
import UserCard from "../../components/login/UserCard"
<<<<<<< HEAD
import UserCard from "../../components/UserCard"
import { logError } from "../../config/logging/loggerFunctions.mjs";
=======
import UserCard from "../../components/login/UserCard"
>>>>>>> b107f60 (ADD mantine & various styles)

const AdminDashboard = () => {
    const [users, setUsers] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await apiClient.get(`/api/v1/admin/`)
                setUsers(response.data.users)
                setUserCount(response.data.users.length)
                setLoading(false)
            } catch (err) {
                
                logError('Failed to fetch users', err)

                setError('User is not authorized to view this page - please log in again')
                
                setLoading(false)
            }
        }

        getAllUsers()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="userContainer">
                <p>user count: {userCount}</p>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    )
}

export default AdminDashboard;