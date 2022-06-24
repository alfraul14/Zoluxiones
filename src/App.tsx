import React from 'react';
//import { ArmaTuPlan } from './components/pages/ArmaTuPlan/ArmaTuPlan';
import { Gracias } from './components/pages/Gracias/Gracias';
//import { Login } from './components/pages/Login';
import MyThemeComponent from './components/providers/MythemeProvider';


function App() {
  return (
  < MyThemeComponent>
     <Gracias></Gracias>
  </MyThemeComponent>
  
  );
}

export default App;
