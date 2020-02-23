import React from 'react';
import ReactDOM from 'react-dom';
import { JsonBoxProvider } from 'react-jsonbox';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <JsonBoxProvider value={{ url: 'https://jsonbox.io', id: 'box_2c9a7405aa03c019165e' }}>
            <App />
    </JsonBoxProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
