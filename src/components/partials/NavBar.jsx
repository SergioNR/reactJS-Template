import { NavLink } from 'react-router'

const NavBar = () => {
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


            <div className='buttonWrapper'>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">register</NavLink>

            </div>
        </div>
    )
};

export default NavBar;