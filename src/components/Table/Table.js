import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[200],
      
    },
   
  },
}))(TableRow);

function createData(RoomNumber, Assignedto, Floor, FreeBeds, OccupiedBeds,Roomtypes) {
  return { RoomNumber, Assignedto, Floor, FreeBeds, OccupiedBeds,Roomtypes };
}

const rows = [
  createData('A101', 'Angela', 1, 0, 2,'Double Occupancy'),
  createData('A102', 'Dwight', 1, 0, 2,'Double Occupancy'),
  createData('A103', 'Pam', 1, 0, 2,'Double Occupancy'),
  createData('A101', 'Angela', 1, 0, 2,'Double Occupancy'),
  createData('A102', 'Dwight', 1, 0, 2,'Double Occupancy'),
  createData('A103', 'Pam', 1, 0, 2,'Double Occupancy'),
  createData('A101', 'Angela', 1, 0, 2,'Double Occupancy'),
  createData('A102', 'Dwight', 1, 0, 2,'Double Occupancy'),
  createData('A103', 'Pam', 1, 0, 2,'Double Occupancy'),
  createData('A101', 'Angela', 1, 0, 2,'Double Occupancy'),
  createData('A102', 'Dwight', 1, 0, 2,'Double Occupancy'),
  createData('A103', 'Pam', 1, 0, 2,'Double Occupancy'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (

    
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
           <TableRow>
           <StyledTableCell align="center">Rooms</StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>

           </TableRow>
          <TableRow>
            <StyledTableCell align="center">RoomNumber</StyledTableCell>
            <StyledTableCell align="center">Assigned to</StyledTableCell>
            <StyledTableCell align="center">Floor</StyledTableCell>
            <StyledTableCell align="center">Free Beds</StyledTableCell>
            <StyledTableCell align="center">Occupied Beds</StyledTableCell>
            <StyledTableCell align="center">Room types</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
             
             
              <StyledTableCell align="center">{row.RoomNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.Assignedto}</StyledTableCell>
              <StyledTableCell align="center">{row.Floor}</StyledTableCell>
              <StyledTableCell align="center">{row.FreeBeds}</StyledTableCell>
              <StyledTableCell align="center">{row.OccupiedBeds}</StyledTableCell>
              <StyledTableCell align="center">{row.Roomtypes}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
