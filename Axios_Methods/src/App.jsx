import { useState } from 'react'
import './App.css'
import  { Routes, Route} from 'react-router-dom' 
import API_Data from './Components/API_Data'
import Table from './Screens/Table'
import New_User from './Screens/New_User'
import Set_User from './Screens/Set_User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/data' Component={API_Data} />
        <Route path='/table' Component={Table} />
        <Route path='/new-user' Component={New_User} />
        <Route path='/set-user/:id' Component={Set_User} />
     </Routes>
    </>
  )
}

export default App
