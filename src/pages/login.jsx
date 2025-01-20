import NavBar from '../components/partials/navBar'

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div>
                <h1>Login Page</h1>
            <form method="post" action="/login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
};

export default LoginPage;