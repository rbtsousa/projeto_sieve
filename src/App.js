import React from 'react';
import {Provider} from 'react-redux'
import './config/reactotronConfig'
import store from './store'
import Routes from './routes/index'
import GlobalStyles from './styles/global'
import {Router} from 'react-router-dom'
import history from './services/history'


function App() {
  return (
    <>
    <Provider store={store}>
    <Router history={history}>
    <Routes />
    <GlobalStyles/>
    </Router>
    </Provider>
    </>  
  );
}

export default App;
