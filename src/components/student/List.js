import { TableContainer, Table, TableBody, TableHead, TableRow, Paper, TableCell, IconButton, Tooltip } from "@mui/material"
import { deepPurple, green, orange } from "@mui/material/colors"
import { makeStyles } from 'tss-react/mui'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles()((theme) => {
  return {
    headingColor: {
      backgroundColor: deepPurple[400],
      color: "white"
    },
    addStuColor: {
      backgroundColor: green[400],
      color: "white"
    },
    stuListColor: {
      backgroundColor: orange[400],
      color: "white"
    },
    tableHeadCell: {
      backgroundColor: deepPurple[400],
      color: "white"
    }
  }
});

const List = () => {
    const { classes } = useStyles();
  return (
    <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#616161" }}>
                  <TableCell align="center" className={classes.tableHeadCell} >No</TableCell>
                  <TableCell align="center" className={classes.tableHeadCell} >Name</TableCell>
                  <TableCell align="center" className={classes.tableHeadCell} >Email</TableCell>
                  <TableCell align="center" className={classes.tableHeadCell} >Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center">Sonam</TableCell>
                  <TableCell align="center">Sonam@gmail.com</TableCell>
                  <TableCell align="center">
                    <Tooltip title="view">
                      <IconButton>
                        <Link to="/view/1">
                          <VisibilityIcon color=' primary ' />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Edit'>
                      <IconButton>
                        <Link to="/edit/1">
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete'>
                      <IconButton>
                        <DeleteIcon color="secondary" />

                      </IconButton>

                    </Tooltip>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default List