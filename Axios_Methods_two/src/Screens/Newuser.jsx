import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, colors } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Newuser = () => {

  const navigate = useNavigate("")

  let [newuser, setNewuser] = useState({
    name:"",
    username:"",
    email:"",
    website:"",
    phone:""
  })


  const Create = () => {
    axios
      .post('http://localhost:3000/users' , newuser)
      .then((e) => navigate('/'))
    console.log(newuser)
  } 

  return (
    <>
    <h1 sx={{float:"left"}}>New User</h1>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        // minHeight: "100vh"
      }}>
        <TextField 
        onChange={(e) => setNewuser({...newuser, name:e.target.value})}
        fullWidth id="outlined-basic" label="Name" variant="outlined" />
        <TextField 
        onChange={(e) => setNewuser({...newuser, username:e.target.value})}
        fullWidth id="outlined-basic" label="UserName" variant="outlined" />
        <TextField 
        onChange={(e) => setNewuser({...newuser, email:e.target.value})}
        fullWidth id="outlined-basic" label="Email" variant="outlined" />
        <TextField 
        onChange={(e) => setNewuser({...newuser, website:e.target.value})}
        fullWidth id="outlined-basic" label="Phone" variant="outlined" />
        <TextField 
        onChange={(e) => setNewuser({...newuser, phone:e.target.value})}
        fullWidth id="outlined-basic" label="Website" variant="outlined" />
      </Box>
      <br />
      <Button onClick={Create} sx={{backgroundColor:"green"}} variant='contained'>Create</Button>

    </>
  )
}

export default Newuser
