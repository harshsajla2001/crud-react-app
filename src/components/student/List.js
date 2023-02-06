import { TableContainer, Table, TableBody, TableHead, TableRow, Paper, TableCell, IconButton, Tooltip } from "@mui/material"
import { deepPurple, green, orange } from "@mui/material/colors"
import { makeStyles } from 'tss-react/mui'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudent()
  },[])
  async function getAllStudent() {
    try {
      const students = await axios.get("http://localhost:3333/students")
      // console.log(students.data);
      setStudents(students.data);
    }
    catch (error) {
      console.log('something is Worng');
    }
  }
  const handleDelete = async id => {
    await axios.delete(`http://localhost:3333/students/${id}`)
    let newstudent = students.filter((item)=>{
      return item.id !== id;
    })
    setStudents(newstudent);
  }

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
          {
            students.map((student, i) => {
              return (

                <TableRow key={i}>
                  <TableCell align="center">{i+1}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="view">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <VisibilityIcon color=' primary ' />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Edit'>
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete'>
                      <IconButton onClick={()=>handleDelete(student.id)}>
                        <DeleteIcon color="secondary" />

                      </IconButton>

                    </Tooltip>
                  </TableCell>
                </TableRow>

              )
            })
          }

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List