import ContextComponent from './_children/ContextComponent';
import { Container } from "../styles/Router.styled";
import { ThemeProvider } from '../hooks/ThemeContext';

function UseContext(){
  return (
    <ThemeProvider>
      <Container>
        <ContextComponent />
      </Container>
    </ThemeProvider>
  )
}

export default UseContext;

// go back over this one. you got it, but the cleanup was confusing