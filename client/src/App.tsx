import React from "react"
import { Routes } from "react-router-dom"
import "./ui/assets/styles/App.scss"
import AppRouter from "./components/router"

const App: React.FC = () => {
  return (
      <Routes>
        <AppRouter />
      </Routes>
  )
}

export default App
