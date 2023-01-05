import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'

library.add(faMagnifyingGlass);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
)
