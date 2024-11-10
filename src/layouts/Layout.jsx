import { Outlet } from 'react-router-dom';

// Components import
import Header from '../components/common/Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
