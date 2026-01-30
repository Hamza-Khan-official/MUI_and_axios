import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Button, colors } from '@mui/material';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Edituser = () => {



    const navigate = useNavigate("")

    const [edituser, setEdituser] = useState({
        name: "",
        username: "",
        email: "",
        website: "",
        phone: ""
    })


    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios
            .get("http://localhost:3000/users/" + id)
            .then((res) => setEdituser(res.data))
            .catch((error) => console.log(error));
    }, [])


    const Create = () => {
        axios
            .put(`http://localhost:3000/users/${id}`, edituser)
            .then((res) => {
                alert("User Update")
                navigate('/')
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <h1 sx={{ float: "left" }}>Update User</h1>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                // minHeight: "100vh"
            }}>
                <TextField
                    value={edituser.name}
                    onChange={(e) => setEdituser({ ...edituser, name: e.target.value })}
                    fullWidth id="outlined-basic" label="" variant="outlined"
                />
                <TextField
                    value={edituser.username}
                    onChange={(e) => setEdituser({ ...edituser, username: e.target.value })}
                    fullWidth id="outlined-basic" label="" variant="outlined"
                />
                <TextField
                    value={edituser.email}
                    onChange={(e) => setEdituser({ ...edituser, email: e.target.value })}
                    fullWidth id="outlined-basic" label="" variant="outlined"
                />
                <TextField
                    value={edituser.website}
                    onChange={(e) => setEdituser({ ...edituser, website: e.target.value })}
                    fullWidth id="outlined-basic" label="" variant="outlined"
                />
                <TextField
                    value={edituser.phone}
                    onChange={(e) => setEdituser({ ...edituser, phone: e.target.value })}
                    fullWidth id="outlined-basic" label="" variant="outlined"
                />
            </Box>
            <br />
            <Button onClick={Create} sx={{ backgroundColor: "green" }} variant='contained'>Updtae</Button>

        </>
    )
}

export default Edituser
