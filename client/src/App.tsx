import React from "react"
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/home"
import News from "./pages/News/News"
import "./assets/styles/App.scss"
import Auth from "./pages/Auth/Auth"
import Admin from "./pages/Admin/Admin"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Auth />} path="/authorization" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
=======
import { Routes } from "react-router-dom"
import "./ui/assets/styles/App.scss"
import AppRouter from "./components/router"

const App: React.FC = () => {
  return (
      <Routes>
        <AppRouter />
      </Routes>
>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f
  )
}

export default App
