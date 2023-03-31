import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./Component/serviceWorker";
import reducer, { initialState } from './Component/reducer';
import { StateProvider } from './Component/StateProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState = {initialState}
    reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
