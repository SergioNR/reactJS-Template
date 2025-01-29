import { Outlet } from 'react-router'
import NavBar from '../components/partials/navBar'
export const AdminDashboardWrapper = () => {
    return (
        <div>
            <NavBar />
            <h1>This is the admin dashboard</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboardWrapper;