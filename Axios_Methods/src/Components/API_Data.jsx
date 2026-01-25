import axios from 'axios'
import { useEffect, useState} from 'react'
import Table from '../Screens/Table'

const API_Data = () => {

    let [Userdata, setUserdata] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/users')
            .then((res) => setUserdata(res.data))
            .catch((error) => console.log(error))
    }, [])


  return (
    <div>
      <Table Users_data={Userdata}/>
    </div>
  )
}

export default API_Data