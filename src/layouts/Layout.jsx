import { Outlet } from 'react-router-dom';

// Components import
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
