import { useState, useEffect } from 'react';
import { Container, StyledUseEffect } from "../styles/Router.styled";

function UseEffect(){
  // useState always returns an array with two values
  const [resourceType, setResourceType] = useState('posts');
  const [ items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])
  // nothing in the array, only runs on load
  // nothing - runs every time page renders

  return (
    <Container>
      <h1>{resourceType}</h1>
      <StyledUseEffect>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </StyledUseEffect>

      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>
      })}
    </Container>
  )
}

export default UseEffect;

// blog article: https://blog.webdevsimplified.com/2020-04/use-effect/
// https://jsonplaceholder.typicode.com