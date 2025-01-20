import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/not-found">not-found</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/update-password">Update Password</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;