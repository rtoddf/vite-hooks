import { useState, useEffect } from 'react';
import { Container, StyledUseEffect } from "../styles/Router.styled";

function UseEffect(){
  // useState always returns an array with two values
  const [resourceType, setResourceType] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])
  // nothing in the array, only runs on load
  // nothing - runs every time page renders

  return (
    <Container>
      <StyledUseEffect>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </StyledUseEffect>
    </Container>
  )
}

export default UseEffect;