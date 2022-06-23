import React from 'react';
import { ArmaTuPlan } from './components/pages/ArmaTuPlan/ArmaTuPlan';
//import { Login } from './components/pages/Login';
import MyThemeComponent from './components/providers/MythemeProvider';
 


function App() {
  return (
  < MyThemeComponent>
     <ArmaTuPlan></ArmaTuPlan>
  </MyThemeComponent>
  
  );
}

export default App;
