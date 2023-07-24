import { useState, useEffect } from 'react';
import { Container } from "../styles/Router.styled";

function UseEffect(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // cleanup - prevents eventListeners from constantly being added
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <h1>{windowWidth}</h1>
    </Container>
  )
}

export default UseEffect;

// blog article: https://blog.webdevsimplified.com/2020-04/use-effect/