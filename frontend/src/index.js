import React,{Fragment} from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import UserContextProvider from './contexts/UserContext'
ReactDom.render(<BrowserRouter>
<Fragment>
            {/* <h1>This is a sample component</h1> */}
            <UserContextProvider>
    <App/>
    </UserContextProvider>
        </Fragment>
  </BrowserRouter>, document.querySelector('#root'))