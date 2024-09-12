import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Auth0Provider
            domain="dev-rq0x1so2hesk4sy1.us.auth0.com"
            clientId="StleRL6bpoYn2iQCSTZOS3IWRBJnDNRl"
            authorizationParams={{
                redirect_uri: 'https://movies-2-t3a2.onrender.com/auth/login'
            }}
        >
            <App />
        </Auth0Provider>
    </BrowserRouter>
)
