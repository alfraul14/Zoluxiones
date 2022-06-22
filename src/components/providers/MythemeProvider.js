import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: ['10px','12px', '16px', '24px', '28px', '36px'],  
  colors: {   
    rimac:'#EF3340',
  },
  text: {
    p14: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px', 
      textAlign: 'right',
      letterSpacing:' 0.2px',
      

    },
    p12: {
      fontfamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '20px',      
      letterSpacing:' 0.2px',
    }  
  },
}

const MyThemeComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>

);

export default MyThemeComponent;