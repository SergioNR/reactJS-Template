import { Link } from 'react-router'
const UserCard = ({user}) => {

    return (
        <div className="userCard" key={user._id}>
            <p>Name: {user.userDetails.email}</p>
            <p>Role: {user.userDetails.role}</p>
            <p>created at: {user.createdDate}</p>
            <p>last updated at: {user.lastUpdatedDate}</p>
            <p>last login at: {user.lastLoginDate || 'never logged in'}</p>
            <Link to={`/adminDashboard/userProfile/${user._id}`}>View Profile</Link>

        </div>
    )
}

export default UserCard;