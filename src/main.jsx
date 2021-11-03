import React from 'react'
import ReactDOM from 'react-dom'
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-7mwpqpr4.us.auth0.com"
    clientId="7awJLGExXVdGC5v2q8YeNQt0CP0kynH2"
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider >
  </React.StrictMode>,
  document.getElementById('root')
)
