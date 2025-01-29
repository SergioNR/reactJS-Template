import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const UserProfile = () => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/${userId}`)

                setLoading(false);
                setUser(response.data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchUser();
    }, [userId])

    useEffect(() => {
        const deleteUser = async () => {
            const response = await axios.delete(`http://localhost:3000/api/v1/user/${userId}`)

            //TODO ADD REDIRECT LOGIC
        }

        deleteUser();
    })
    
    if (loading) return <div>Loading User...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
        <>

        <div>
            <h1>User Profile</h1>
            <p>Name: {user.data.createdDate}</p>
            {/* <p>Email: {user.email}</p> */}
        </div>
        <div className="userActions">
            <button className='deleteUser'>click to delete</button>
        </div>
        </>
    )
}

export default UserProfile;