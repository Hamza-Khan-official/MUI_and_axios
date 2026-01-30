import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Table from './Screens/table'
import Table from './Components/table'
import { Routes, Route} from 'react-router-dom'
import Newuser from './Screens/Newuser'
import Edituser from './Screens/Edituser'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' Component={Table}/>
          <Route path='new-user' Component={Newuser}/>
          <Route path='edit-user/:id' Component={Edituser}/>
      </Routes>
    </>
  )
}

export default App
