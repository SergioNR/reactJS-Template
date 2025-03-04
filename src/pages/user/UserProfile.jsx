import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import UserCard from '../../components/UserCard'

const UserProfile = () => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/user/profile`, {
                    withCredentials: true,
                })

                setLoading(false);
                setUser(response.data.user)


            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchUser();
    }, [])

        const deleteUser = async () => {
            try {
                const response = await axios.delete(`${import.meta.env.VITE_SERVER_API}/api/v1/user/delete`, 
                {
                    withCredentials: true,
                });

                if (response.status === 200) {
                    navigate('/');
                }            

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

    
    if (loading) return <div>Loading User...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
        <>

        <div>
        <UserCard user={user} />
        </div>
        <div className="userActions">
        <h2>Available actions</h2>
            <button  className='deleteUser' onClick={deleteUser}>Delete my account</button>
        </div>
        </>
    )
}

export default UserProfile;