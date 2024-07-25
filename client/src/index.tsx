import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import './sass/main.scss';
import App from './containers/App';
import { store } from './redux/app';

if (process.env.NODE_ENV === 'development') {
  console.log("🤔 It's looks like we are in a development mode!");
} else {
  console.log = () => {};
  console.warn = () => {};
}

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
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
