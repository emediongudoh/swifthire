import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Third-party imports
import { Provider } from 'react-redux';

// Custom imports
import App from './App.jsx';
import './index.css';
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
