import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

import App from './App';
import { store /*,persistor*/ } from './redux/store';

import * as serviceWorker from './serviceWorkerRegistration'

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.register();
