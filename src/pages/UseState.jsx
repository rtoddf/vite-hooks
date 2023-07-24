import {useState} from 'react';
import { Container, StyledUseState } from "../styles/Router.styled";

function UseState(){
  // useState always returns an array with two values
  const [count, setCount] = useState(4);

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  return (
    <Container>
      <StyledUseState>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </StyledUseState>
    </Container>
  )
}

export default UseState;