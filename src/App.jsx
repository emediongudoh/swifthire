import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts import
import Layout from './layouts/Layout';

// Pages import
import Home from './pages/home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
