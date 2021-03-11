import React from 'react';
import {BrowserRouter} from 'react-router-dom';


import GlobalStyles from './styles/globalStyles';
import {Routes} from './routes';
import {AuthProvider} from './hooks/auth';

function App  ()  {
  return (
    <BrowserRouter>
   
    <GlobalStyles/>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
