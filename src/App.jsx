import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseState from './pages/UseState';

import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/use-state' element={<UseState />}/>
      </Routes>
    </>
  )
}

export default App