import React from 'react';
import {ToastContainer} from 'react-toastify'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import './config/reactotronConfig'
import {store,persistor} from './store'
import Routes from './routes/index'
import GlobalStyles from './styles/global'
import {Router} from 'react-router-dom'
import history from './services/history'


function App() {
  return (
    <>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router history={history}>
    <Routes />
    <GlobalStyles/>
    <ToastContainer autoClose ={3000}/>
    </Router>
    </PersistGate>
    </Provider>
    </>  
  );
}

export default App;
