// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Intefaces
import App from './components/interfaces/home.component'

// Styles
import GlobalStyle from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<GlobalStyle />
    <App />
  </React.StrictMode>
)
