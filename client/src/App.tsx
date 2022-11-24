import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import News from './pages/News/News'
import "./assets/styles/App.scss"
import Auth from './pages/Auth/Auth'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<News />} path="news"/>
        <Route element={<Auth />} path="authorization"/>
        <Route element={<Home />} path="/"/>
        <Route element={<Home />} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App