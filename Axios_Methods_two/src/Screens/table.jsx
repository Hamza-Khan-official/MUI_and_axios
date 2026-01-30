import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables({ data }) {

    const navigate = useNavigate("");

    let delUser = (id) => {
        axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
            alert("user Delete")
            window.location.reload();
        })
        .cath((error) => console.log(error))
    }

    return (
        <>
            <Button 
            sx={{ float: "right", margin:2 }} 
            variant='contained'
            onClick={(e) => navigate('/new-user')}
            >
            Create New</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">User Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Website</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell align="left">{row.id}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.username}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.website}</StyledTableCell>
                                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <EditIcon
                                    sx={{Color:"blue", cursor:"pointer", margin:1  }}
                                    onClick={(e) => navigate(`/edit-user/${row.id}`)}
                                    />
                                    <DeleteIcon sx={{color:"red", cursor:"pointer", margin:1  }}
                                    onClick={(e) => delUser(`${row.id}`)}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
