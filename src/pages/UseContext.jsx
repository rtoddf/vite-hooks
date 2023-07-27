import React, {useState} from 'react';
import ContextComponent from './_children/ContextComponent';
import { Container } from "../styles/Router.styled";

export const ThemeContext = React.createContext();

function UseContext(){
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <Container>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ContextComponent />
      </Container>
    </ThemeContext.Provider>
  )
}

export default UseContext;