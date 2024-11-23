import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider}  from 'react-redux' 
import { Store } from './Backend/Redux.js/Store';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </AuthProvider>
  </Provider>

);

 
