import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseEffectWindow from './pages/UseEffectWindow';
import UseContext from './pages/UseContext';

import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/use-state' element={<UseState />}/>
        <Route path='/use-effect' element={<UseEffect />}/>
        <Route path='/use-effect-window' element={<UseEffectWindow />}/>
        <Route path='/use-context' element={<UseContext />}/>
      </Routes>
    </>
  )
}

// https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate

export default App