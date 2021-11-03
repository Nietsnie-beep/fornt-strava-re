import {LoginButton} from './Login/Login'

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Logout from './Login/Logout'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const [count, setCount] = useState(0)
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? <>
     <Profile />
     <Logout />
     </> :
     <LoginButton/>
        }
      </header>        
    </div>
  )
}

export default App
