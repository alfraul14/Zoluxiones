import React from 'react';
import { Login } from './components/pages/Login';
import MyThemeComponent from './components/providers/MythemeProvider';
 


function App() {
  return (
  < MyThemeComponent>
     <Login></Login>
  </MyThemeComponent>
  );
}

export default App;
