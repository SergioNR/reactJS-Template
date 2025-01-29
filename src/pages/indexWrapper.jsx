import { Outlet } from 'react-router'
import NavBar from '../components/partials/navBar'
import Footer from '../components/partials/Footer';

const IndexWrapper = () => {
    return (
        <>
          <NavBar />
          <div className='homepage'>
                <Outlet />
            </div>
            <Footer />
        </>
      )
    };

export default IndexWrapper;