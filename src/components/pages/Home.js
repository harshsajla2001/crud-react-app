import { Typography, Box, Grid, TextField, Button } from "@mui/material"
import { deepPurple, green, orange } from "@mui/material/colors"
import { makeStyles } from 'tss-react/mui'
import List from "../student/List";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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

const Home = () => {
  const { classes } = useStyles();
  const [student, setStudent] = useState({
    stuname: "",
    email: ""
  });
  const [status, setStatus] = useState(false);
  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:3333/students`, student)
      setStatus(true);  
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Home />
   }


  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2"> React CRUD with API call </Typography>
      </Box>
      <Grid container justify='center' spacing={4} >
        <Grid item md={6} xs={12}>
          <Box textAlign='center' p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add student</Typography>

          </Box>
          <form noValidate >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label='Name' onChange={e => onTextFieldChange(e)} />
              </Grid>
              <Grid item xs={12} >
                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label='Email' onChange={e => onTextFieldChange(e)} />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button type='submit' variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>

            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant='h4'>Student List</Typography>
          </Box>
          <List />
        </Grid>
      </Grid>
    </>
  )
}

export default Home