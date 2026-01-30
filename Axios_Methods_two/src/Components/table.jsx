import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '../Screens/table'

const table = () => {

    
    const [data, setData] = useState([])

        useEffect(()=> {
            axios
            .get('http://localhost:3000/users')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error))
            
        },[])
        
  return (
    <div>
      <Table data={data}/>
    </div>
  )
}

export default table
