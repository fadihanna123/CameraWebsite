import './sass/main.scss';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
