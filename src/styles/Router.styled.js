import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const StyledUseState = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  padding: 20px;
  justify-items: center;
  gap: 20px;

  font-size: 2rem;

  button {
    width: 100%;
  }
`;

export const StyledUseEffect = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  padding: 20px;
  justify-items: center;
  gap: 20px;
  font-size: 2rem;

  button {
    width: 100%;
  }
`;
