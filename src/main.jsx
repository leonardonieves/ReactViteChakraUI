import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-o2aznev5.us.auth0.com' 
      clientId='k2L2YgYSKaCW2caiuyDBSYMfrC2Qbj65' 
      redirectUri={window.location.origin}
    >
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>      
      </ChakraProvider>
    </Auth0Provider>        
  </React.StrictMode>,
  document.getElementById('root')
)
