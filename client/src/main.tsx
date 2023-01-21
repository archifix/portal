import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/styles/reset.scss'
import './index.css'
<<<<<<< HEAD
import './assets/styles/header.scss'
import './assets/styles/footer.scss'
=======
import './ui/assets/styles/header.scss'
import './ui/assets/styles/footer.scss'

>>>>>>> 0e5a80557de103005bea356e3a8e77cb9fbea83f

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
