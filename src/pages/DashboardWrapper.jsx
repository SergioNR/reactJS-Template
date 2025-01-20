import { Outlet } from 'react-router'
import NavBar from '../components/partials/navBar'
const DashboardWrapper = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default DashboardWrapper