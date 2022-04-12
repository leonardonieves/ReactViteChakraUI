import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

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
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>      
    </ChakraProvider>    
  </React.StrictMode>,
  document.getElementById('root')
)
