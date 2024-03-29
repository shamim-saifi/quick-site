import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Provider } from 'react-redux';
import Store from './redux/Store';

import { extendTheme } from '@chakra-ui/react'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// "proxy":"http://localhost:1000/",
// export const server = '/api';
export const server = 'http://localhost:5000/api';


// 2. Add your color mode config
// const config = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// 3. extend the theme
// const theme = extendTheme({ config })

root.render(
  <StrictMode>
    <Provider store={Store}>
      <ChakraProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode}/> */}
        
        {/* <ColorModeSwitcher />  */}
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
