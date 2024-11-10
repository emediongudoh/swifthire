import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts import
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

// Pages import
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import ServiceDetails from './pages/service-details';

// Components import
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
    return (
        <>
            <div className='text-sm'>
                <Toaster position='top-center' />
            </div>

            <BrowserRouter>
                <ScrollToTop />

                <Routes>
                    <Route
                        path='/'
                        element={<Layout />}
                    >
                        <Route
                            exact
                            index
                            element={<Home />}
                        />
                        <Route
                            path='services/:serviceLabel'
                            element={<ServiceDetails />}
                        />
                    </Route>

                    <Route
                        path='/'
                        element={<AuthLayout />}
                    >
                        <Route
                            exact
                            path='register'
                            element={<Register />}
                        />
                        <Route
                            exact
                            path='login'
                            element={<Login />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
