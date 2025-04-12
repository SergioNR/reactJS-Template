import { NavLink } from 'react-router'
import LogOutButton from '../navBarElements/LogOutButton.jsx'



const UserNavBar = () => {
    return (
        <div className="navBarWrapper">

            <div className="logoContainer">
                <NavLink to="/">
                    <img src="/images/logo.png" alt="logo" />
                </NavLink>
            </div>

        
            <nav className='navBar'>
                <ul className='navBarUl'>
                    <li>
                        <NavLink to="/user">user Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/update-password">Update Password</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/profile">user profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/billing">Billing</NavLink>
                    </li>
                </ul>
            </nav>


            <div className='buttonWrapper'>
                <LogOutButton />
            </div>
        </div>
    );
};

export default UserNavBar;