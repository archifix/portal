import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import News from "./pages/News/News"
import "./assets/styles/App.scss"
import Auth from "./pages/Auth/Auth"
// import { router } from "./components/router/routes"

const App: React.FC = () => {
  return (
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Auth />} path="/login" />
        <Route element={<Auth />} path="/registartion" />
        <Route element={<Home />} path="/" />
      </Routes>
  )
}

export default App
