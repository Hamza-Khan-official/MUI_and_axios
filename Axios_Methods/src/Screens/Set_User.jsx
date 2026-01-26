import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Set_User = () => {

    // Api data Stored
    const [edituser, setEdituser] = useState("")
 
    // Updated Api data

    const navigate = useNavigate("")

    const { id } = useParams();

    useEffect(() => {
        axios
            .get('http://localhost:3000/users/' + id)
            .then((res) => setEdituser(res.data))
            .catch((error) => console.log(error))
    }, [])


    // Set Button Fuuncion

    const Set = () => {
        console.log(edituser)
        axios
            .put(`http://localhost:3000/users/${id}`, edituser)
            .then((res) => {
                alert('Set Data Successfully')
                navigate('/data')
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <Paper sx={{ margin: 5, padding: 3 }} elevation={15}>
                <Typography sx={{ marginBottom: 2 }} variant='h3'>
                    Set User
                </Typography>
                <TextField
                    onChange={(e) => setEdituser({ ...edituser, name: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    // label="Name" variant="outlined"  
                    value={edituser.name} />
                <TextField
                    onChange={(e) => setEdituser({ ...edituser, username: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    // label="User Name"
                    variant="outlined"
                    value={edituser.username} />
                <TextField
                    onChange={(e) => setEdituser({ ...edituser, email: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    // label="Email"
                    variant="outlined"
                    value={edituser.email} />
                <TextField
                    onChange={(e) => setEdituser({ ...edituser, phone: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    // label="Phone"
                    variant="outlined"
                    value={edituser.phone} />
                <TextField
                    onChange={(e) => setEdituser({ ...edituser, website: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    // label="Website"
                    variant="outlined"
                    value={edituser.website} />
                <br /><br />
                <Button
                    onClick={Set}
                    sx={{ color: "White", border: "2px solid green", backgroundColor: "green", cursor: "pointer" }}
                    variant="Contained">
                    SET</Button>
            </Paper>

        </div>
    )
}

export default Set_User
