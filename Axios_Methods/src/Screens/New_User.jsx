import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const New_User = () => {

    const navigate = useNavigate("")

    let [NewUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const Create = () => {

        axios
            .post('http://localhost:3000/users', NewUser)
            .then((res) => {
                alert("User Added...");
                navigate('/data');
            })
            .catch((error) => console.log(error))


        console.log(NewUser)
    }

    return (
        <div>
            <Paper sx={{ margin: 5, padding: 3 }} elevation={15}>
                <Typography sx={{ marginBottom: 2 }} variant='h3'>
                    Create User
                </Typography>
                <TextField
                    onChange={(e) => setNewUser({ ...NewUser, name: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    label="Name" variant="outlined" />
                <TextField
                    onChange={(e) => setNewUser({ ...NewUser, username: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined" />
                <TextField
                    onChange={(e) => setNewUser({ ...NewUser, email: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" />
                <TextField
                    onChange={(e) => setNewUser({ ...NewUser, phone: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined" />
                <TextField
                    onChange={(e) => setNewUser({ ...NewUser, website: e.target.value })}
                    sx={{ marginBottom: 2 }}
                    required fullWidth
                    id="outlined-basic"
                    label="Website"
                    variant="outlined" />
                <br /><br />
                <Button 
                disabled={
                    !NewUser.name ||
                    !NewUser.username ||
                    !NewUser.email ||
                    !NewUser.phone ||
                    !NewUser.website
                }
                onClick={Create} 
                sx={{ color: "White", border: "2px solid green", backgroundColor: "green" }} 
                variant="Contained">
                Create</Button>
            </Paper>

        </div>
    )
}

export default New_User
