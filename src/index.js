import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MaterialUIControllerProvider } from 'context/md';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MaterialUIControllerProvider>
            <App />
        </MaterialUIControllerProvider>
    </BrowserRouter>
);
