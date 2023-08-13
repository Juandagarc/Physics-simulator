import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParticlesContainer from '../containers/Particles-container/particles-container.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" Component={ParticlesContainer} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
